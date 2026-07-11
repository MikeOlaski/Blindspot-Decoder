# Security & Privacy

## Security controls (current)
- Third-party keys are consumed server-side via API routes.
- Client requests hit internal API routes, not provider APIs directly.

## Privacy constraints
- Product framing is reflective coaching, not diagnosis.
- Current MVP stores structured report data for lead capture.
- Raw media persistence is out of scope in current implementation.

## Required hardening backlog
- Add RLS and restrictive policies for capture table.
- Add rate-limiting on `/api/analyze` and `/api/send-report`.
- Add abuse protection (bot checks / honeypot / CAPTCHA strategy).
- Add request and error telemetry with PII redaction.
