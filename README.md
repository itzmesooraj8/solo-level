# Solo Leveling Life System

Mobile-first Solo Leveling inspired life RPG app.

## Highlights

- Daily task engine with lock-at-day-start behavior
- Weekly quest planner (Sunday to Saturday)
- XP, level thresholds, streak logic, penalties, and level-up scenes
- Real-time YES/NO prompt overlay at task time
- Local-first persistence with IndexedDB (Dexie)
- PWA manifest + service worker shell caching
- Capacitor-ready Android integration with local notification actions

## Tech Stack

- React + Vite + TanStack Router
- Tailwind CSS v4 + shadcn/Radix UI
- Zustand for game state
- Dexie for IndexedDB persistence
- Framer Motion + React Three Fiber
- Capacitor (Android, local notifications, app lifecycle, haptics)

## Local Development

```bash
npm install
npm run dev
```

## Quality Checks

```bash
npm run format
npm run lint
npm run build
```

## Android Build

```bash
npx cap add android
npm run build:android
npm run cap:open
```

Detailed steps: see [MOBILE_BUILD.md](MOBILE_BUILD.md).

## Project Structure

- `src/routes` - app pages and root shell
- `src/components` - shared UI and gameplay overlays
- `src/lib/engine.ts` - scheduler, task resolution, streak and XP rules
- `src/lib/db.ts` - Dexie schema and model types
- `src/services/notifications.ts` - native/web notification abstraction
- `public/manifest.webmanifest` and `public/sw.js` - PWA assets

## Product Rules

- Difficulty XP: easy +10, medium +20, hard +40
- Penalty: strict -15, flex -5
- Streak reset threshold: strict 2+, flex 3+ missed tasks/day
- Level thresholds: 0, 100, 250, 500, 1000, 2000, 5000

## License

Private project.
