'use client';

import React, { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import * as THREE from 'three';

interface Props {
  imageUrl: string;
}

const RotatingImage: React.FC<Props> = ({ imageUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  const ImagePlane = () => {
    const groupRef = useRef<THREE.Group>(null);
    const texture = useTexture(imageUrl);

    useFrame(() => {
      if (groupRef.current && !isHovered) {
        groupRef.current.rotation.y += 0.02;
      }
    });

    return (
      <group ref={groupRef}>
        {/* Front Image */}
        <mesh scale={[1.5, 1.5, 1]}>
          <planeGeometry args={[3.5, 6]} />
          <meshBasicMaterial map={texture} side={THREE.FrontSide} />
        </mesh>

        {/* Back Image (flipped) */}
        <mesh rotation={[0, Math.PI, 0]} scale={[1.5, 1.5, 1]}>
          <planeGeometry args={[3.5, 6]} />
          <meshBasicMaterial map={texture} side={THREE.FrontSide} />
        </mesh>
      </group>
    );
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-black">
      <div
        className="group transition duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="w-[350px] h-[600px]">
          <Canvas
            camera={{ position: [0, 0, 10] }}
            gl={{ preserveDrawingBuffer: true, powerPreference: 'high-performance' }}
            onCreated={({ gl }) => {
              gl.getContext().canvas.addEventListener('webglcontextlost', (e) => {
                e.preventDefault();
                console.warn('WebGL context lost.');
              });
            }}
          >
            <ambientLight intensity={0.6} />
            <OrbitControls enableZoom={false} enableRotate={false} />
            <Suspense fallback={null}>
              <ImagePlane />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default RotatingImage;
