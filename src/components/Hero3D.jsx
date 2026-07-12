// src/components/Hero3D.jsx

import { Canvas } from "@react-three/fiber";
import { Float, Sphere, Torus } from "@react-three/drei";

function Scene() {
  return (
    <>
      <Float speed={2}>
        <Sphere args={[1, 32, 32]} position={[-3, 0, 0]}>
          <meshStandardMaterial color="#3b82f6" />
        </Sphere>
      </Float>

      <Float speed={3}>
        <Torus args={[1, 0.3, 16, 100]} position={[3, 1, 0]}>
          <meshStandardMaterial color="#06b6d4" />
        </Torus>
      </Float>

      <Float speed={2.5}>
        <Sphere args={[0.7, 32, 32]} position={[0, -2, 0]}>
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