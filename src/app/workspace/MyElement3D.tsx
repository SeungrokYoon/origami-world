"use client";

import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RefObject, useRef } from "react";
import { MathUtils, Mesh } from "three";

export default function MyElement3D() {
  const meshRef: RefObject<Mesh> = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta;
    }
  });

  return (
    <>
      <directionalLight position={[1, 1, 1]} />
      <axesHelper scale={10} />
      <OrbitControls />
      {/* 3d물체는 mesh */}
      <mesh
        ref={meshRef}
        position={[0, 2, 0]}
        rotation={[0, 0, MathUtils.degToRad(20)]}
        scale={[2, 1, 1]}
      >
        <boxGeometry />
        <meshStandardMaterial
          color="#e67e22"
          opacity={0.5}
          transparent={true}
        />
      </mesh>
    </>
  );
}
