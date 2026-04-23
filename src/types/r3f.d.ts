// Augment React's JSX with the Three.js intrinsic elements (R3F v8 + React 19).
import type { ThreeElements } from "@react-three/fiber";

declare module "react" {
  namespace JSX {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface IntrinsicElements extends ThreeElements {}
  }
}

// Also augment the global JSX (some tooling still reads this).
declare global {
  namespace JSX {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface IntrinsicElements extends ThreeElements {}
  }
}

export {};
