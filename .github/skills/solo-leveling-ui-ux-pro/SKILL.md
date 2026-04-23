---
name: solo-leveling-ui-ux-pro
description: Build and refine Solo Leveling Life System frontend features for React + Tailwind v4 + shadcn + Zustand + Framer Motion + React Three Fiber + Capacitor-ready PWA. Use for mobile-first dashboard, tasks, calendar, profile, overlays, neon dark design, motion systems, and interaction quality checks.
argument-hint: "[feature, screen, or UX goal]"
---

# Solo Leveling UI/UX Pro Skill

Use this skill when implementing or improving frontend features in this repository.

## Purpose

Create production-grade, mobile-first interfaces that preserve the app's gameplay logic and established Hunter visual language while keeping performance and accessibility strong.

## Use When

- Building or refactoring screens in Home, Tasks, Calendar, Quests, or Profile.
- Implementing popup flows, XP feedback, level-up moments, and streak/status visuals.
- Improving visual quality (glassmorphism, bento layout, aurora backgrounds, neon accents).
- Improving interaction quality (touch targets, motion, feedback, form behavior).
- Preparing frontend behavior that should remain compatible with Capacitor Android deployment.

## Do Not Use For

- Backend-only tasks.
- Non-UI database migrations without UX impact.
- Infra or deployment automation that does not change app UX.

## Repository Context

Read these first for context and constraints:

- [plan.md](plan.md)
- [MOBILE_BUILD.md](MOBILE_BUILD.md)
- [src/styles.css](src/styles.css)
- [src/routes/\_\_root.tsx](src/routes/__root.tsx)
- [src/lib/engine.ts](src/lib/engine.ts)
- [src/services/notifications.ts](src/services/notifications.ts)
- [src/stores/gameStore.ts](src/stores/gameStore.ts)
- [src/lib/db.ts](src/lib/db.ts)

## Mandatory Design Direction

- Mobile-first by default.
- Dark-mode-first Hunter aesthetic (OLED black, neon accents, atmospheric depth).
- Glassmorphism and bento-style layout structure where it adds clarity.
- Strong but intentional typography hierarchy.
- Motion that communicates state and reward, not random decoration.

## Stack Requirements

- React + Vite + TanStack Router.
- Tailwind CSS v4 token-driven styling.
- shadcn/Radix component primitives.
- Zustand for UI/game state.
- Dexie IndexedDB for persistence.
- Framer Motion for core transitions and micro-interactions.
- React Three Fiber for major level-up cinematic moments only.
- Capacitor compatibility for native notifications and haptics.

## Implementation Workflow

1. Clarify Feature Scope

- Identify target route, affected stores, and game-rule impacts.
- Verify if this is a strict gameplay rule change or only a visual change.

2. Anchor to Existing Tokens and Components

- Reuse color, radius, glow, and glass tokens from [src/styles.css](src/styles.css).
- Reuse available primitives from [src/components/ui](src/components/ui) before creating new base components.

3. Build Mobile-First Structure

- Design for thumb reach first.
- Maintain clear hierarchy and single primary action per screen section.
- Keep bottom navigation behavior predictable.

4. Add Meaningful Interaction

- Add immediate visual response for press/tap.
- Use motion to express progress, completion, or state transitions.
- Keep animation performant (prefer transform and opacity).

5. Protect Gameplay Integrity

- Keep XP/streak/penalty logic in engine/store layers, not duplicated in view components.
- Respect daily lock behavior and date-based transitions.

6. Keep Native Path Clean

- Route notifications through [src/services/notifications.ts](src/services/notifications.ts).
- Avoid web-only assumptions that break in Capacitor builds.

7. Validate Before Finalizing

- Check responsive behavior for small phones first.
- Check contrast and touch target quality.
- Check that offline persistence still works for affected flows.

## UI Quality Checklist

- Visual identity is cohesive with Hunter style and existing tokens.
- Main actions are obvious and thumb-reachable.
- Empty, loading, success, and error states are present.
- Motion supports comprehension and does not slow primary flows.
- No gameplay rule drift (XP, streak, lock, penalties).
- No regressions to offline-first persistence.

## Frontend Blueprints For This App

### Home Dashboard

- Dynamic island status pill: level, xp, streak.
- Bento cards: today tasks, xp progress, streak status, quick actions.
- Floating add-task action with clear priority.

### Task System

- Strong visual lock state when day is locked.
- Task cards with time, difficulty, and clear Complete/Skip actions.
- Task editor sheet with strict/smart/off notification mode.

### Prompt Overlay

- Full-screen blur and focus trap.
- Large YES/NO buttons with distinct emphasis.
- Instant reward/penalty feedback and haptic-compatible interaction.

### Calendar

- Month grid with clear green/yellow/red day status encoding.
- Day detail sheet: completed, missed, earned XP, day status.

### Profile

- Level and total XP summary.
- Best streak and completion/miss statistics.
- Strict/Flex mode switch with concise rule explanation.

## Examples

### Example Request 1

"Refine the Home screen so the XP progress and streak cards feel premium and more readable on small phones."

Expected output behavior:

- Keep existing route/store flow.
- Improve hierarchy with token-based contrast and spacing.
- Add subtle motion for XP updates and card entrance.
- Preserve performance and touch ergonomics.

### Example Request 2

"Design a better locked-day task card state so users instantly understand tasks are read-only after the day starts."

Expected output behavior:

- Add clear lock affordance and muted interaction style.
- Keep completion data visible but prevent editing affordances.
- Do not alter lock rule logic in engine.

### Example Request 3

"Improve the YES/NO prompt overlay to feel more cinematic while remaining fast and accessible."

Expected output behavior:

- Strong foreground focus and blurred background.
- Large buttons with clear labels and high contrast.
- Motion and feedback should be fast, meaningful, and non-blocking.

## Anti-Patterns

- Recomputing XP or streak logic inside UI components.
- Adding random visual effects that conflict with existing style tokens.
- Desktop-first layout decisions that break mobile ergonomics.
- Heavy animation that causes frame drops on low-end Android devices.
- Web-only notification assumptions when native support is required.
