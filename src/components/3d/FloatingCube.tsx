import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

interface FloatingCubeProps {
  position: [number, number, number];
  scale: number;
  rotationSpeed: number;
  color: string;
}

export function FloatingCube({ position, scale, rotationSpeed, color }: FloatingCubeProps) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += rotationSpeed;
      meshRef.current.rotation.y += rotationSpeed * 0.7;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial 
        color={color}
        transparent
        opacity={0.6}
        emissive={color}
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}