import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "app.hunter.system",
  appName: "Hunter System",
  webDir: "dist/client",
  backgroundColor: "#0a0a0a",
  android: {
    allowMixedContent: false,
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 1200,
      backgroundColor: "#0a0a0a",
      showSpinner: false,
    },
    LocalNotifications: {
      iconColor: "#7c3aed",
    },
  },
};

export default config;
