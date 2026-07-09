import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";

function Cube() {
  return (
    <Float speed={2} rotationIntensity={2}>
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#3b82f6" />
      </mesh>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <div className="fixed inset-0 -z-10 opacity-20">
      <Canvas>
        <ambientLight intensity={2} />
        <directionalLight position={[2, 2, 2]} />
        <Cube />
      </Canvas>
    </div>
  );
}