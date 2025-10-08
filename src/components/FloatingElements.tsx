import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function FloatingSphere({ position, color, speed }: { position: [number, number, number], color: string, speed: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5;
      meshRef.current.rotation.x += 0.001;
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 32, 32]} position={position}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={0.3}
        speed={2}
        roughness={0.4}
        metalness={0.8}
        transparent
        opacity={0.6}
      />
    </Sphere>
  );
}

export const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <FloatingSphere position={[-4, 2, 0]} color="#10b981" speed={0.5} />
        <FloatingSphere position={[4, -2, -2]} color="#059669" speed={0.7} />
        <FloatingSphere position={[0, 3, -3]} color="#34d399" speed={0.6} />
        <FloatingSphere position={[-3, -3, -1]} color="#6ee7b7" speed={0.8} />
      </Canvas>
    </div>
  );
};
