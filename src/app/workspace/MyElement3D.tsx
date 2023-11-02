"use client";

import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RefObject, useRef } from "react";
import { Mesh } from "three";

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
      <mesh ref={meshRef} rotation={[0, 45 * (Math.PI / 180), 0]}>
        <boxGeometry />
        <meshStandardMaterial color="#e67e22" />
      </mesh>
    </>
  );
}
