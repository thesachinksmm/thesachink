import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import {
  Text,
  Float,
  Sphere,
  Box,
  Torus,
  Plane,
  RoundedBox,
  Cylinder,
  Cone,
} from "@react-three/drei";
import { useRef, useMemo } from "react";
import { Mesh, TextureLoader, DoubleSide } from "three";
import * as THREE from "three";

function FloatingObjects() {
  const groupRef = useRef<any>();
  const particlesRef = useRef<any>();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      groupRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      particlesRef.current.rotation.z = state.clock.elapsedTime * 0.02;
    }
  });

  // Create particle system
  const particleCount = 50;
  const particles = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, []);

  return (
    <>
      {/* Main floating objects group */}
      <group ref={groupRef}>
        {/* YouTube Play Button inspired element */}
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
          <RoundedBox position={[-4, 3, 0]} args={[1.2, 0.8, 0.1]} radius={0.1}>
            <meshStandardMaterial
              color="#C0C0C0"
              metalness={0.8}
              roughness={0.2}
              emissive="#0EA5E9"
              emissiveIntensity={0.1}
            />
          </RoundedBox>
          {/* Play button triangle */}
          <Cone
            position={[-4, 3, 0.1]}
            args={[0.15, 0.3, 3]}
            rotation={[0, 0, Math.PI / 2]}
          >
            <meshStandardMaterial
              color="#FF0000"
              emissive="#FF0000"
              emissiveIntensity={0.3}
            />
          </Cone>
        </Float>

        {/* Social Media Icons as 3D elements */}
        <Float speed={1.8} rotationIntensity={0.3} floatIntensity={0.6}>
          <RoundedBox position={[4, 2, -2]} args={[0.8, 0.8, 0.2]} radius={0.2}>
            <meshStandardMaterial
              color="#1877F2"
              emissive="#1877F2"
              emissiveIntensity={0.2}
            />
          </RoundedBox>
        </Float>

        <Float speed={2.2} rotationIntensity={0.4} floatIntensity={0.5}>
          <Cylinder position={[3, -3, 1]} args={[0.4, 0.4, 0.2, 8]}>
            <meshStandardMaterial
              color="#E4405F"
              emissive="#E4405F"
              emissiveIntensity={0.3}
            />
          </Cylinder>
        </Float>

        {/* Abstract geometric shapes */}
        <Float speed={1.5} rotationIntensity={0.7} floatIntensity={0.4}>
          <Torus position={[-3, -2, 2]} args={[0.5, 0.15, 8, 16]}>
            <meshStandardMaterial
              color="#06B6D4"
              emissive="#06B6D4"
              emissiveIntensity={0.4}
              metalness={0.5}
            />
          </Torus>
        </Float>

        <Float speed={2.5} rotationIntensity={0.6} floatIntensity={0.7}>
          <Box
            position={[5, -1, -1]}
            args={[0.6, 0.6, 0.6]}
            rotation={[0.5, 0.5, 0]}
          >
            <meshStandardMaterial
              color="#0EA5E9"
              emissive="#0EA5E9"
              emissiveIntensity={0.3}
              metalness={0.7}
              roughness={0.3}
            />
          </Box>
        </Float>

        {/* Floating spheres with different materials */}
        <Float speed={3} rotationIntensity={0.2} floatIntensity={0.9}>
          <Sphere position={[-5, 1, -3]} args={[0.3]}>
            <meshStandardMaterial
              color="#10B981"
              emissive="#10B981"
              emissiveIntensity={0.4}
            />
          </Sphere>
        </Float>

        <Float speed={1.7} rotationIntensity={0.5} floatIntensity={0.3}>
          <Sphere position={[2, 4, 3]} args={[0.25]}>
            <meshStandardMaterial
              color="#F59E0B"
              emissive="#F59E0B"
              emissiveIntensity={0.5}
            />
          </Sphere>
        </Float>

        {/* Content creation tools representation */}
        <Float speed={2.8} rotationIntensity={0.4} floatIntensity={0.6}>
          <RoundedBox
            position={[-2, 4, -1]}
            args={[0.5, 0.8, 0.1]}
            radius={0.05}
          >
            <meshStandardMaterial
              color="#8B5CF6"
              emissive="#8B5CF6"
              emissiveIntensity={0.2}
            />
          </RoundedBox>
        </Float>
      </group>

      {/* Particle system */}
      <group ref={particlesRef}>
        <points>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={particleCount}
              array={particles}
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial
            size={0.05}
            color="#0EA5E9"
            sizeAttenuation={true}
            transparent={true}
            opacity={0.6}
          />
        </points>
      </group>
    </>
  );
}

function ImagePlanes() {
  const profileImageRef = useRef<Mesh>(null);
  const achievementImageRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (profileImageRef.current) {
      profileImageRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      profileImageRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
    if (achievementImageRef.current) {
      achievementImageRef.current.rotation.z =
        Math.sin(state.clock.elapsedTime * 0.4) * 0.05;
      achievementImageRef.current.position.x =
        6 + Math.sin(state.clock.elapsedTime * 0.2) * 0.3;
    }
  });

  return (
    <>
      {/* Profile/landscape image */}
      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
        <Plane
          ref={profileImageRef}
          position={[-6, -1, -2]}
          args={[2, 2.5]}
          rotation={[0, 0.3, 0]}
        >
          <meshStandardMaterial transparent opacity={0.8}>
            <primitive
              attach="map"
              object={new TextureLoader().load(
                "https://cdn.builder.io/api/v1/image/assets%2F5153f308efa14f1d87457acdc495e125%2Fb2e42b49d48d41249f2da1b24685d494?format=webp&width=800",
              )}
            />
          </meshStandardMaterial>
        </Plane>
        {/* Frame effect */}
        <RoundedBox
          position={[-6, -1, -2.1]}
          args={[2.2, 2.7, 0.05]}
          radius={0.1}
        >
          <meshStandardMaterial
            color="#0EA5E9"
            emissive="#0EA5E9"
            emissiveIntensity={0.3}
            metalness={0.8}
          />
        </RoundedBox>
      </Float>

      {/* Achievement image (YouTube play button) */}
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.4}>
        <Plane
          ref={achievementImageRef}
          position={[6, 2, 1]}
          args={[2, 1.5]}
          rotation={[0, -0.4, 0]}
        >
          <meshStandardMaterial transparent opacity={0.9}>
            <primitive
              attach="map"
              object={new TextureLoader().load(
                "https://cdn.builder.io/api/v1/image/assets%2F5153f308efa14f1d87457acdc495e125%2F00d934ad5f184e7f950cd166f606f42a?format=webp&width=800",
              )}
            />
          </meshStandardMaterial>
        </Plane>
        {/* Glow effect around achievement */}
        <RoundedBox position={[6, 2, 0.9]} args={[2.2, 1.7, 0.05]} radius={0.1}>
          <meshStandardMaterial
            color="#FFD700"
            emissive="#FFD700"
            emissiveIntensity={0.4}
            metalness={0.9}
            transparent
            opacity={0.3}
          />
        </RoundedBox>
      </Float>
    </>
  );
}

function Scene3D() {
  return (
    <>
      {/* Enhanced lighting setup */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#0EA5E9" />
      <pointLight position={[-10, -10, -5]} intensity={0.8} color="#06B6D4" />
      <pointLight position={[0, 15, 5]} intensity={0.6} color="#8B5CF6" />
      <spotLight
        position={[0, 10, 0]}
        angle={0.3}
        penumbra={1}
        intensity={0.5}
        color="#0EA5E9"
        castShadow
      />

      {/* Directional light for better depth */}
      <directionalLight position={[5, 5, 5]} intensity={0.3} color="#ffffff" />

      <FloatingObjects />
      <ImagePlanes />
    </>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
        shadows
      >
        <Scene3D />
      </Canvas>
    </div>
  );
}
