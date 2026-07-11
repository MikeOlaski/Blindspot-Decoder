# Operations Runbook

## Local development
- Install: `npm install`
- Run: `npm run dev`
- Preview: `http://localhost:5050` (if configured)

## Common failure modes
- `500 /api/analyze`: missing key or Gemini quota exhausted
- `502 /api/send-report`: Supabase table missing or Resend failure

## Triage checks
1. Verify `.env.local` values.
2. Verify Supabase schema applied (`supabase/schema.sql`).
3. Hit API endpoints directly with test payloads.
4. Check server console for provider error payloads.

## Incident note template
- Time window
- User impact
- Error signature
- Root cause
- Remediation
- Preventive action
