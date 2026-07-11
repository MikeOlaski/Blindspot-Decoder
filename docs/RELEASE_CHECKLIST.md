# Release Checklist

## Pre-release
- Lint passes for touched files.
- Env vars documented and loaded in target environment.
- `/api/analyze` test request succeeds.
- `/api/send-report` test request succeeds.
- Supabase table exists and writes records.
- Resend sends and returns message ID.

## UX checks
- Landing -> setup -> interview -> results flow works.
- Quota and provider failures show user-safe messaging.
- Email submit shows thank-you state only on success.

## Deployment checks
- Deploy package excludes oversized asset archives.
- Build starts and endpoint health checks pass.
