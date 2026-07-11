# CLAUDE CODE Standards

These are repository coding and delivery standards.

## Code quality
- Keep changes narrow and traceable.
- Prefer server-side integration for external APIs and secrets.
- Maintain typed payloads for API routes.

## Git hygiene
- Commit coherent units with clear messages.
- Avoid committing temporary tool artifacts.
- Keep deploy-specific exclusions documented.

## API and error handling
- Never throw raw provider errors to users.
- Return actionable status + safe messages.
- Include debug details in development only.

## UI behavior
- Degrade gracefully on provider failures.
- Do not break flow on expected external errors (quota/rate limits).
- Keep success states gated to actual successful writes/sends.
