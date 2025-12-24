'use client';

import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

const Brain = () => {
  const { scene } = useGLTF('/model/brain.glb');
  const meshRef = useRef<THREE.Group>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const [isHovered, setIsHovered] = React.useState(false);

  useFrame((state) => {
    if (meshRef.current && !isHovered) {
      // Only rotate when not hovered
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }

    // Animate glow color
    if (glowRef.current) {
      const time = state.clock.elapsedTime;
      const hue = (time * 0.1) % 1;
      const color = new THREE.Color().setHSL(hue, 0.8, 0.6);
      (glowRef.current.material as THREE.MeshBasicMaterial).color = color;
    }
  });

  return (
    <group 
      ref={meshRef}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
    >
      <primitive object={scene} scale={0.2} />
      {/* RGB Glow for Brain Model */}
      <mesh ref={glowRef} position={[0, 0, 0]}>
        <sphereGeometry args={[3, 32, 32]} />
        <meshBasicMaterial 
          transparent 
          opacity={0.1}
          color="#ff69b4"
        />
      </mesh>
    </group>
  );
};

const BrainModel3D = () => {
  return (
    <div className="relative w-full h-full">


      {/* 3D Canvas */}
      <div className="relative z-10 w-full h-full">
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[1, 1, 1]} intensity={1.2} />
          <pointLight position={[0, 5, 5]} intensity={0.8} color="#ff69b4" />
          <pointLight position={[5, 0, 5]} intensity={0.6} color="#4f46e5" />
          <pointLight position={[-5, 0, 5]} intensity={0.6} color="#ec4899" />
          
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            enableRotate={true}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          
          <Suspense fallback={null}>
            <Brain />
          </Suspense>
        </Canvas>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-pink-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>


    </div>
  );
};

export default BrainModel3D;
