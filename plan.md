# Solo Leveling Life System — v1 Plan

A mobile-first, local-first PWA with a neon dark "Hunter UI" aesthetic, bento dashboard, and a cinematic 3D level-up moment. Built Capacitor-ready so you can wrap it into an Android APK later without rewrites.

## Visual Direction — "Hunter Interface 2026"

- **Palette**: OLED black `#0a0a0a` base, violet `#7c3aed` + cyan `#22d3ee` neon accents, magenta for danger/penalties
- **Aurora background**: animated gradient blobs (CSS + Framer Motion) drifting behind frosted glass cards
- **Glassmorphism + Bento grid**: asymmetric rounded panels (`rounded-3xl`), subtle glowing borders, backdrop blur
- **Dynamic Island top bar**: pill-shaped status showing Level • XP • Streak, expands on tap
- **Micro-interactions**: button-press depress, haptic-style scale, XP counter tick-up, card glow on hover
- **3D moment**: React Three Fiber scene on level-up — a glowing rune/sigil shatters and reforms with the new level number
- **Bottom nav**: floating glass dock — Home / Tasks / Calendar / Profile

## Information Architecture (TanStack routes)

- `/` — Dashboard (today)
- `/tasks` — Task library + day editor (lock state per day)
- `/quests` — Weekly planner (Sun→Sat grid)
- `/calendar` — Monthly heatmap
- `/profile` — Stats, mode toggle, settings
- Global overlay: Task Prompt Popup (full-screen blur)
- Global overlay: Level-Up scene (3D)

## Core Features (v1)

### 1. Task System

- Create/Edit/Delete with: title, time, duration, difficulty (Easy/Med/Hard), notification mode (Strict/Smart/Off), custom prompt text
- Tasks **editable until day starts** (00:00 local), then **locked** read-only with a lock badge
- Difficulty maps to XP: 10 / 20 / 40

### 2. Weekly Quests (Sun→Sat)

- Bento grid of 7 day-cards, drag-to-assign tasks
- Auto-rolls over Sunday 00:00 (snapshot prior week into history)
- Editable anytime (separate from daily lock)

### 3. Real-Time Popup Engine

- Fires at scheduled time (foreground) — full-screen blur overlay
- Large YES / NO buttons, custom prompt support ("Did you eat junk food?" with reverse logic)
- Instant XP animation feedback, haptic vibration via `navigator.vibrate`
- Missed prompts queue and surface on next app open

### 4. XP & Leveling

- Thresholds: 0 / 100 / 250 / 500 / 1000 / 2000 / 5000
- Animated progress bar (spring physics), tick-up XP counter
- Level-up triggers 3D R3F celebration scene with skip button

### 5. Streak System

- Daily evaluation at midnight: 0 missed = perfect, 1 = partial, 2+ = reset
- Tracks current + best streak, shown on dashboard with flame glow intensity

### 6. Calendar

- Month grid with green/yellow/red day dots (OKLCH for vibrant neon)
- Tap day → sheet with completed tasks, XP earned, status

### 7. Dashboard

- Greeting ("Welcome back, Hunter")
- Dynamic Island stats pill
- Bento cards: Today's tasks, XP ring, Streak flame, Quick add FAB
- Task cards with Complete / Skip buttons + time-until indicator

### 8. Strict / Flex Mode toggle

- Strict: full -15 XP penalty, 2-miss streak reset
- Flex: -5 XP penalty, 3-miss streak reset
- Toggle in Profile

### 9. Profile / Stats

- Level, total XP, best streak, tasks completed/missed, mode toggle, data export/wipe

## Technical Architecture

- **State**: Zustand stores (`useGameStore`, `useTaskStore`, `useQuestStore`) with persist middleware → IndexedDB
- **Storage**: **Dexie.js** wrapping IndexedDB — tables: `tasks`, `dayLogs`, `weeklyQuests`, `playerStats`, `streakHistory`
- **Scheduler**: in-app interval tick (1s) checks pending task times → fires popup + notification
- **Notifications service** (`src/services/notifications.ts`): single abstraction
  - Web build: `Notification` API + scheduled in-app popups
  - Wrapped so swapping to `@capacitor/local-notifications` is a one-file change later
- **3D**: `@react-three/fiber` + `@react-three/drei` lazy-loaded only for level-up overlay (keeps bundle light)
- **Animation**: Framer Motion for layout, page transitions, micro-interactions; GSAP optional for SplitText on level-up
- **PWA**: web manifest + icons + `display: standalone` (no service worker — per Lovable PWA guidance, avoids preview-iframe issues; you can add a SW after export for offline shell caching)
- **Capacitor readiness**: code structure, notification abstraction, and `vibrate` calls are all Capacitor-compatible. Wrapping is done **outside Lovable** after export

## What Lovable Will Deliver

- Full TanStack route structure with separate route files + per-route SEO
- All UI screens, animations, popup engine, XP/streak/level logic
- Dexie schema + Zustand stores wired to IndexedDB (true offline-first)
- Web Notifications + in-app popup scheduler
- 3D level-up scene
- Web app manifest + neon icons + splash colors

## What You'll Do After Export (for APK)

I'll include a `MOBILE_BUILD.md` with exact steps:

1. Export to GitHub
2. `npm i @capacitor/core @capacitor/cli @capacitor/android @capacitor/local-notifications`
3. `npx cap init` → `npx cap add android`
4. Swap notification service import to Capacitor variant (one-line change, file already stubbed)
5. `npm run build && npx cap sync && npx cap open android`
6. Build signed APK in Android Studio (steps included)

## Out of Scope for v1 (flag for later)

- Cloud sync (you chose local-only)
- Multi-user / auth
- Background OS notifications inside Lovable preview (only work after Capacitor wrap)
