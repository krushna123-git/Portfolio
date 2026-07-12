// src/components/Hero3D.jsx

import { Canvas } from "@react-three/fiber";
import { Float, Sphere, Torus } from "@react-three/drei";

function Scene() {
  return (
    <>
      <Float speed={2} rotationIntensity={2}>
        <Sphere args={[1, 64, 64]} position={[-4, 1, 0]}>
          <meshStandardMaterial color="#3b82f6" />
        </Sphere>
      </Float>

      <Float speed={3} rotationIntensity={3}>
        <Torus args={[1.2, 0.4, 16, 100]} position={[4, 1, 0]}>
          <meshStandardMaterial color="#06b6d4" />
        </Torus>
      </Float>

      <Float speed={2.5} rotationIntensity={4}>
        <Sphere args={[0.8, 64, 64]} position={[0, -3, 0]}>
          <meshStandardMaterial color="#8b5cf6" />
        </Sphere>
      </Float>
    </>
  );
}

export default function Hero3D() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 8] }}>
        <ambientLight intensity={2} />
        <pointLight position={[10, 10, 10]} />
        <Scene />
      </Canvas>
    </div>
  );
}