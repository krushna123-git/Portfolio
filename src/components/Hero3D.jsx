import { Canvas } from "@react-three/fiber";
import { Float, Sphere, Torus, OrbitControls } from "@react-three/drei";

function Scene() {
  return (
    <>
      {/* Main Sphere */}
      <Float speed={2} rotationIntensity={2}>
        <Sphere args={[1, 64, 64]} position={[-4, 1, 0]}>
          <meshStandardMaterial color="#3b82f6" />
        </Sphere>
      </Float>

      {/* Torus */}
      <Float speed={3} rotationIntensity={3}>
        <Torus args={[1.2, 0.4, 16, 100]} position={[4, 1, 0]}>
          <meshStandardMaterial color="#06b6d4" />
        </Torus>
      </Float>

      {/* Bottom Sphere */}
      <Float speed={2.5} rotationIntensity={4}>
        <Sphere args={[0.8, 64, 64]} position={[0, -3, 0]}>
          <meshStandardMaterial color="#8b5cf6" />
        </Sphere>
      </Float>

      {/* Extra Floating Elements */}

      <Float speed={1.5} rotationIntensity={3}>
        <Sphere args={[0.5, 32, 32]} position={[-2, 3, -2]}>
          <meshStandardMaterial color="#60a5fa" />
        </Sphere>
      </Float>

      <Float speed={2} rotationIntensity={4}>
        <Sphere args={[0.4, 32, 32]} position={[3, -1, -1]}>
          <meshStandardMaterial color="#22d3ee" />
        </Sphere>
      </Float>

      <Float speed={2.5} rotationIntensity={5}>
        <Sphere args={[0.3, 32, 32]} position={[-3, -2, -2]}>
          <meshStandardMaterial color="#8b5cf6" />
        </Sphere>
      </Float>

      <Float speed={1.8} rotationIntensity={2}>
        <Torus args={[0.7, 0.2, 16, 100]} position={[2, 3, -3]}>
          <meshStandardMaterial color="#38bdf8" />
        </Torus>
      </Float>

      <Float speed={2.2} rotationIntensity={4}>
        <Torus args={[0.5, 0.15, 16, 100]} position={[-4, -1, -3]}>
          <meshStandardMaterial color="#a855f7" />
        </Torus>
      </Float>
    </>
  );
}

export default function Hero3D() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 8] }}>
        <ambientLight intensity={1.8} />

        <pointLight
          position={[10, 10, 10]}
          intensity={2}
        />

        <pointLight
          position={[-10, -10, -10]}
          intensity={1}
          color="#3b82f6"
        />

        <Scene />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}