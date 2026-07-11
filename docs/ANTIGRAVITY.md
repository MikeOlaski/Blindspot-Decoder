# ANTIGRAVITY

Purpose: prevent project drift, unnecessary complexity, and quality regression.

## Anti-bloat rules
- No new dependency without direct feature need.
- No additional service in MVP path unless tied to conversion or reliability.
- No speculative architecture beyond current phase.

## Anti-regression rules
- Critical flows must always be testable manually:
  - analyze flow
  - result render
  - email capture/send
- Keep migration scripts with schema changes.
- Keep environment contract documented.

## Stability constraints
- Provider outages or quota exhaustion must fail gracefully.
- Never block the entire app on one integration.
- Prefer fallback messaging over runtime crashes.
