# Environment Variables

## Required
- `GEMINI_API_KEY`: Gemini inference key
- `RESEND_API_KEY`: Resend transactional email key
- `SUPABASE_URL`: Project URL
- `SUPABASE_SECRET_KEY`: Preferred Supabase server secret key

## Legacy fallback
- `SUPABASE_SERVICE_ROLE_KEY`: accepted in code as fallback if `SUPABASE_SECRET_KEY` is absent

## Local setup
1. Copy `.env.example` to `.env.local`.
2. Set all required values.
3. Restart dev server after any change.

## Safety
- Never expose secret keys to client bundles.
- Never commit real secrets.
