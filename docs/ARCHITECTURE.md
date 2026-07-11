# Architecture

## Stack
- Frontend: Next.js App Router + React + Tailwind CSS
- AI: Google Gemini via `@google/genai`
- Email: Resend REST API
- Lead storage: Supabase Postgres via `@supabase/supabase-js` (server key)

## App structure
- `app/page.tsx`: Client flow orchestration (landing -> setup -> interview -> analyzing -> results)
- `components/*`: UI stateful steps
- `app/api/analyze/route.ts`: Server endpoint for AI analysis
- `app/api/send-report/route.ts`: Server endpoint for lead capture + email send
- `lib/gemini.ts`: Server-only analysis engine

## Request lifecycle
1. User completes interview.
2. Client posts to `/api/analyze` with `qaPairs` and optional `frames`.
3. Server calls Gemini and returns structured result JSON.
4. Results page shows summary with gated full report.
5. User submits email.
6. Client posts to `/api/send-report` with `email` + `result`.
7. Server upserts lead in Supabase and sends report via Resend.

## Deployment notes
- Current deployment helper has payload limits; large static asset trees must be excluded from deploy package.
- `.vercelignore` is used to reduce package size.
