# AGENTS

This repository is a mobile-first Solo Leveling Life System app. These instructions help coding agents ship features quickly without breaking project conventions.

## Project Scope

- Product: gamified task and streak system with XP, levels, prompts, and calendar tracking.
- Priority order: functionality first, stability second, UI polish third.
- Platform: PWA first, then Capacitor Android wrapper.

## Read First

- [plan.md](plan.md)
- [MOBILE_BUILD.md](MOBILE_BUILD.md)
- [src/routes/\_\_root.tsx](src/routes/__root.tsx)
- [src/lib/engine.ts](src/lib/engine.ts)
- [src/styles.css](src/styles.css)
- [src/lib/db.ts](src/lib/db.ts)

## Commands

- Dev: npm run dev
- Build: npm run build
- Preview: npm run preview
- Lint: npm run lint
- Format: npm run format

## Architecture

- Router: TanStack Router, route files in [src/routes](src/routes).
- Global shell and app lifecycle in [src/routes/\_\_root.tsx](src/routes/__root.tsx).
- State: Zustand stores in [src/stores](src/stores).
- Persistence: Dexie IndexedDB tables in [src/lib/db.ts](src/lib/db.ts).
- Game logic and scheduling: [src/lib/engine.ts](src/lib/engine.ts).
- Notification abstraction: [src/services/notifications.ts](src/services/notifications.ts).

## UI and Design Conventions

- Keep mobile-first layouts as default; desktop is an enhancement, not the baseline.
- Keep the established dark neon Hunter aesthetic and tokenized styling in [src/styles.css](src/styles.css).
- Use existing shadcn and Radix primitives from [src/components/ui](src/components/ui) before introducing new abstractions.
- Prefer reusable route-level and feature-level components in [src/components](src/components).
- Use meaningful motion (state transitions, success feedback, overlays). Avoid decorative-only animation.

## Data and Logic Guardrails

- Respect day-lock semantics in [src/lib/engine.ts](src/lib/engine.ts) and avoid bypassing lock checks.
- Keep XP, streak, and penalty rules centralized in engine and store logic. Do not duplicate rule math in UI components.
- Preserve offline-first behavior (Dexie as source of truth).
- Keep notification usage behind [src/services/notifications.ts](src/services/notifications.ts), so web and Capacitor implementations stay swappable.

## Mobile and Native Guardrails

- Do not depend on browser notifications for final Android behavior; native behavior must flow through Capacitor Local Notifications.
- Keep touch targets, bottom navigation, and overlays thumb-friendly.
- Preserve safe-area behavior and avoid UI overlap with system bars.

## Working Style

- Make minimal, targeted edits.
- Avoid broad refactors unless requested.
- Add or update tests only when logic changes justify it.
- If requirements are ambiguous, choose the option that preserves existing gameplay rules and data integrity.

## Optional Specialized Skill

- Use [Solo Leveling UI/UX Skill](.github/skills/solo-leveling-ui-ux-pro/SKILL.md) for frontend-heavy requests.
