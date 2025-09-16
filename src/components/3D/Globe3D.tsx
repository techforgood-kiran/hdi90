import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Text, OrbitControls, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

const RotatingGlobe = ({ scrollProgress }: { scrollProgress: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);

  // Create particle system for countries
  const particles = useMemo(() => {
    const temp = new THREE.Object3D();
    const positions = [];
    const colors = [];
    
    // Generate points representing countries
    for (let i = 0; i < 195; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = 2 * Math.PI * Math.random();
      const radius = 1.1;
      
      temp.position.setFromSphericalCoords(radius, phi, theta);
      temp.updateMatrix();
      
      positions.push(temp.position.x, temp.position.y, temp.position.z);
      colors.push(Math.random(), Math.random() * 0.5 + 0.5, 1);
    }
    
    return { positions: new Float32Array(positions), colors: new Float32Array(colors) };
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1 + scrollProgress * Math.PI * 2;
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05 + scrollProgress * Math.PI;
    }
  });

  return (
    <>
      {/* Main Globe */}
      <Sphere ref={meshRef} args={[1, 64, 64]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#1e3a8a"
          transparent
          opacity={0.8}
          wireframe={scrollProgress > 0.5}
        />
      </Sphere>

      {/* Country Points */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particles.positions.length / 3}
            array={particles.positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={particles.colors.length / 3}
            array={particles.colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.02} vertexColors transparent opacity={0.8} />
      </points>

      {/* HDI Text */}
      <Text
        position={[0, 1.5, 0]}
        fontSize={0.2}
        color="#f59e0b"
        anchorX="center"
        anchorY="middle"
      >
        HDI 2030
      </Text>

      {/* Target Value */}
      <Text
        position={[0, -1.5, 0]}
        fontSize={0.15}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        TARGET: 0.90
      </Text>

      <Stars radius={10} depth={50} count={1000} factor={4} />
      <OrbitControls enableZoom={false} enablePan={false} />
    </>
  );
};

export const Globe3D = ({ scrollProgress }: { scrollProgress: number }) => {
  return (
    <motion.div
      className="w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: scrollProgress > 0.2 ? 1 : 0 }}
      transition={{ duration: 1 }}
    >
      <Canvas camera={{ position: [0, 0, 3], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <RotatingGlobe scrollProgress={scrollProgress} />
      </Canvas>
    </motion.div>
  );
};