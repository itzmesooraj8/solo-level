# MOBILE_BUILD.md — Build Android APK with Capacitor

This project already includes Capacitor-ready code paths for:

- local notifications with YES/NO action buttons
- vibration via native haptics
- Android back button behavior

## 1. Install dependencies

```bash
npm install
```

## 2. Initialize native Android platform (first time only)

```bash
npx cap add android
```

The repository includes `capacitor.config.ts` with:

- app id and app name
- splash settings
- local notification icon color

## 3. Build web assets and sync to Android

```bash
npm run build:android
```

## 4. Open Android Studio

```bash
npm run cap:open
```

## 5. Configure app icon and splash assets

In Android Studio:

1. Open Resource Manager.
2. Replace launcher icons (`mipmap-*`) with production icon set.
3. Adjust splash resources if needed.

## 6. Generate signed APK

1. Build -> Generate Signed Bundle / APK -> APK.
2. Create or select a keystore (`.jks`).
3. Choose `release` and enable V1 + V2 signatures.
4. Build output appears in `android/app/release/`.

Install on device:

```bash
adb install -r android/app/release/app-release.apk
```

## Notes

- Notification action taps (YES/NO) resolve pending tasks through the same game engine logic as the in-app prompt.
- Web builds still work without Capacitor runtime; notification service falls back to browser Notification API.
