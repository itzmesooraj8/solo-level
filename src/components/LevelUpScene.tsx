import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Sigil({ level }: { level: number }) {
  const ringRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ringRef.current) ringRef.current.rotation.z += delta * 0.6;
    if (innerRef.current) innerRef.current.rotation.z -= delta * 1.2;
  });
  return (
    <group>
      <Float floatIntensity={1.2} rotationIntensity={0.4} speed={1.6}>
        <mesh ref={ringRef}>
          <torusGeometry args={[1.6, 0.04, 16, 96]} />
          <meshStandardMaterial
            color="#22d3ee"
            emissive="#22d3ee"
            emissiveIntensity={2}
            toneMapped={false}
          />
        </mesh>
        <mesh ref={innerRef}>
          <torusGeometry args={[1.1, 0.025, 16, 96]} />
          <meshStandardMaterial
            color="#a78bfa"
            emissive="#7c3aed"
            emissiveIntensity={2.4}
            toneMapped={false}
          />
        </mesh>
        {/* Hex sigil */}
        <mesh rotation={[0, 0, Math.PI / 6]}>
          <ringGeometry args={[0.55, 0.62, 6]} />
          <meshBasicMaterial color="#f0abfc" toneMapped={false} side={THREE.DoubleSide} />
        </mesh>
        {/* Level number plate */}
        <mesh position={[0, 0, 0]}>
          <circleGeometry args={[0.42, 64]} />
          <meshStandardMaterial
            color="#0a0a0a"
            emissive="#7c3aed"
            emissiveIntensity={0.4}
            toneMapped={false}
          />
        </mesh>
      </Float>
      <pointLight position={[0, 0, 2]} intensity={6} color="#7c3aed" />
      <pointLight position={[2, 2, 1]} intensity={3} color="#22d3ee" />
      {/* Level number — projected via HTML separately for crispness */}
      <Particles count={60} level={level} />
    </group>
  );
}

function Particles({ count, level }: { count: number; level: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = 1.8 + Math.random() * 1.2;
    const a = Math.random() * Math.PI * 2;
    positions[i * 3] = Math.cos(a) * r;
    positions[i * 3 + 1] = Math.sin(a) * r;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 0.5;
  }
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.z += delta * 0.2 * (level / 4 + 1);
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#22d3ee" sizeAttenuation toneMapped={false} />
    </points>
  );
}

export default function LevelUpScene({ level }: { level: number }) {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]}>
      <color attach="background" args={["#08070d"]} />
      <ambientLight intensity={0.3} />
      <Stars radius={20} depth={20} count={400} factor={2} fade speed={1} />
      <Sigil level={level} />
    </Canvas>
  );
}
