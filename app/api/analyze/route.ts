import { NextResponse } from 'next/server';
import { analyzeBlindSpot } from '@/lib/gemini';

type QaPair = { question: string; answer: string };

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const qaPairs = body?.qaPairs as QaPair[] | undefined;
    const frames = body?.frames as string[] | undefined;

    if (!Array.isArray(qaPairs) || !Array.isArray(frames)) {
      return NextResponse.json(
        { error: 'Invalid payload. Expected qaPairs and frames arrays.' },
        { status: 400 }
      );
    }

    const analysis = await analyzeBlindSpot(qaPairs, frames);
    return NextResponse.json(analysis);
  } catch (error) {
    console.error('Analyze API failed:', error);
    const details =
      error instanceof Error ? error.message : 'Unknown analysis error';
    return NextResponse.json(
      {
        error: 'Analysis failed. Check GEMINI_API_KEY and try again.',
        details:
          process.env.NODE_ENV === 'development' ? details : undefined,
      },
      { status: 500 }
    );
  }
}
