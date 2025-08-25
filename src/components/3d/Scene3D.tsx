import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Float } from '@react-three/drei';
import { FloatingCube } from './FloatingCube';
import { Suspense } from 'react';

export function Scene3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00FFFF" />
          
          {/* Stars */}
          <Stars 
            radius={300} 
            depth={60} 
            count={1000} 
            factor={7} 
            saturation={0} 
            fade 
            speed={0.5}
          />
          
          {/* Floating Cubes */}
          <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <FloatingCube 
              position={[-4, 2, -5]} 
              scale={0.5} 
              rotationSpeed={0.01} 
              color="#00FFFF" 
            />
          </Float>
          
          <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1}>
            <FloatingCube 
              position={[4, -1, -3]} 
              scale={0.3} 
              rotationSpeed={0.015} 
              color="#E94560" 
            />
          </Float>
          
          <Float speed={2.5} rotationIntensity={0.5} floatIntensity={3}>
            <FloatingCube 
              position={[0, 3, -8]} 
              scale={0.7} 
              rotationSpeed={0.008} 
              color="#8aff80" 
            />
          </Float>
          
          <Float speed={1.8} rotationIntensity={2} floatIntensity={1.5}>
            <FloatingCube 
              position={[-2, -3, -4]} 
              scale={0.4} 
              rotationSpeed={0.012} 
              color="#3d5af1" 
            />
          </Float>
          
          {/* Controls */}
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            autoRotate 
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}