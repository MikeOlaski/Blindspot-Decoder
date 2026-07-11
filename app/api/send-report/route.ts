import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { AssessmentResult } from '@/lib/types';

type SendReportPayload = {
  email: string;
  result: AssessmentResult;
};

const CAPTURE_TABLE = 'blindspot_email_captures';

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const escapeHtml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

const buildEmailHtml = (result: AssessmentResult) => {
  const roadmapItems = result.starter_roadmap
    .map((item) => `<li style="margin-bottom:8px;">${escapeHtml(item)}</li>`)
    .join('');

  return `
    <div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;line-height:1.5;color:#0f172a;">
      <h1 style="font-size:24px;margin-bottom:8px;">Your Blind Spot Decoder Report</h1>
      <p style="margin:0 0 20px;color:#475569;">Here is your full breakdown.</p>
      <div style="padding:16px;border:1px solid #e2e8f0;border-radius:12px;margin-bottom:16px;">
        <p><strong>Score:</strong> ${result.blind_spot_score}</p>
        <p><strong>Top Blind Spot:</strong> ${escapeHtml(result.top_blind_spot)}</p>
        <p><strong>Secondary Blind Spot:</strong> ${escapeHtml(result.secondary_blind_spot)}</p>
      </div>
      <div style="padding:16px;border:1px solid #e2e8f0;border-radius:12px;margin-bottom:16px;">
        <p><strong>Growth Leverage</strong></p>
        <p>${escapeHtml(result.growth_leverage)}</p>
        <p><strong>Narrative Driver</strong></p>
        <p>${escapeHtml(result.narrative_driver)}</p>
        <p><strong>Impact Statement</strong></p>
        <p>${escapeHtml(result.impact_statement)}</p>
      </div>
      <div style="padding:16px;border:1px solid #e2e8f0;border-radius:12px;">
        <p><strong>Starter Roadmap</strong></p>
        <ol style="padding-left:20px;">${roadmapItems}</ol>
      </div>
    </div>
  `;
};

export async function POST(request: Request) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY;
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseSecretKey =
      process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!resendApiKey) {
      return NextResponse.json(
        { error: 'Missing RESEND_API_KEY in environment.' },
        { status: 500 }
      );
    }
    if (!supabaseUrl || !supabaseSecretKey) {
      return NextResponse.json(
        { error: 'Missing SUPABASE_URL or SUPABASE_SECRET_KEY in environment.' },
        { status: 500 }
      );
    }

    const body = (await request.json()) as Partial<SendReportPayload>;
    const email = typeof body.email === 'string' ? body.email.trim() : '';
    const result = body.result;

    if (!email || !result || !isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid payload. Expected valid email and result.' },
        { status: 400 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseSecretKey);

    const { error: captureError } = await supabase
      .from(CAPTURE_TABLE)
      .upsert(
        {
          email,
          blind_spot_score: result.blind_spot_score,
          top_blind_spot: result.top_blind_spot,
          secondary_blind_spot: result.secondary_blind_spot,
          growth_leverage: result.growth_leverage,
          narrative_driver: result.narrative_driver,
          impact_statement: result.impact_statement,
          starter_roadmap: result.starter_roadmap,
          email_sent: false,
          sent_at: null,
          resend_message_id: null,
          send_error: null,
          updated_at: new Date().toISOString(),
        },
        { onConflict: 'email' }
      );

    if (captureError) {
      return NextResponse.json(
        { error: `Supabase capture failed: ${captureError.message}` },
        { status: 502 }
      );
    }

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Blind Spot Decoder <onboarding@resend.dev>',
        to: [email],
        subject: 'Your Blind Spot Decoder Full Report',
        html: buildEmailHtml(result as AssessmentResult),
      }),
    });

    if (!resendResponse.ok) {
      const resendError = await resendResponse.text();
      await supabase
        .from(CAPTURE_TABLE)
        .update({
          email_sent: false,
          send_error: resendError,
          updated_at: new Date().toISOString(),
        })
        .eq('email', email);

      return NextResponse.json(
        { error: `Resend request failed: ${resendError}` },
        { status: 502 }
      );
    }

    const data = await resendResponse.json();
    await supabase
      .from(CAPTURE_TABLE)
      .update({
        email_sent: true,
        sent_at: new Date().toISOString(),
        resend_message_id: data.id ?? null,
        send_error: null,
        updated_at: new Date().toISOString(),
      })
      .eq('email', email);

    return NextResponse.json({ ok: true, id: data.id });
  } catch (error) {
    console.error('Send report API failed:', error);
    return NextResponse.json({ error: 'Failed to send report.' }, { status: 500 });
  }
}
