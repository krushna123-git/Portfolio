import { Canvas } from "@react-three/fiber";
import {
  Float,
  Sphere,
  Torus,
  Icosahedron,
} from "@react-three/drei";

function Scene() {
  return (
    <>
      {/* Main Sphere */}
      <Float
        speed={2}
        rotationIntensity={2}
        floatIntensity={2}
      >
        <Sphere
          args={[1.2, 64, 64]}
          position={[-5, 1, 0]}
        >
          <meshStandardMaterial
            color="#3b82f6"
            metalness={0.8}
            roughness={0.2}
          />
        </Sphere>
      </Float>

      {/* Torus */}
      <Float
        speed={3}
        rotationIntensity={3}
        floatIntensity={3}
      >
        <Torus
          args={[1.5, 0.35, 16, 100]}
          position={[5, 2, 0]}
        >
          <meshStandardMaterial
            color="#06b6d4"
            metalness={0.8}
            roughness={0.2}
          />
        </Torus>
      </Float>

      {/* Bottom Sphere */}
      <Float
        speed={2.5}
        rotationIntensity={4}
      >
        <Sphere
          args={[0.9, 64, 64]}
          position={[0, -4, 0]}
        >
          <meshStandardMaterial
            color="#8b5cf6"
            metalness={0.8}
            roughness={0.2}
          />
        </Sphere>
      </Float>

      {/* Extra Object */}
      <Float
        speed={4}
        rotationIntensity={5}
      >
        <Icosahedron
          args={[1]}
          position={[0, 3, -1]}
        >
          <meshStandardMaterial
            color="#22c55e"
            wireframe
          />
        </Icosahedron>
      </Float>
    </>
  );
}

export default function Hero3D() {
  return (
    <>
      {/* Background Gradient */}
      <div
        className="
          fixed
          inset-0
          -z-20
          bg-gradient-to-b
          from-slate-950
          via-slate-900
          to-black
        "
      />

      {/* Blue Glow */}
      <div
        className="
          fixed
          top-20
          left-20
          w-96
          h-96
          bg-blue-500/20
          blur-[120px]
          rounded-full
          -z-10
        "
      />

      {/* Cyan Glow */}
      <div
        className="
          fixed
          bottom-20
          right-20
          w-96
          h-96
          bg-cyan-500/20
          blur-[120px]
          rounded-full
          -z-10
        "
      />

      <div className="fixed inset-0 -z-10">
        <Canvas
          camera={{ position: [0, 0, 10] }}
          dpr={[1, 1.5]}
        >
          <ambientLight intensity={1.5} />

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
        </Canvas>
      </div>
    </>
  );
}