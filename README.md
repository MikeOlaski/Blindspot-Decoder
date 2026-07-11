<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/dfeedcaa-5278-4e4f-b762-0715938fa36b

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Copy `.env.example` to `.env.local` and set:
   - `GEMINI_API_KEY`
   - `RESEND_API_KEY`
   - `SUPABASE_URL`
   - `SUPABASE_SECRET_KEY` (preferred; `SUPABASE_SERVICE_ROLE_KEY` supported as fallback)
3. In Supabase SQL editor, run [`supabase/schema.sql`](supabase/schema.sql)
4. Run the app:
   `npm run dev`
