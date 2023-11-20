"use client";

import { Canvas } from "@react-three/fiber";
import MyElement3D from "./MyElement3D";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFireBaseAuthContext } from "@/context/AuthContext";

export default function WorkspacePage() {
  const { loggedIn } = useFireBaseAuthContext();
  const router = useRouter();

  return (
    <article className="w-full">
      WorkspacePage
      <section className="flex w-full justify-center">
        <div className="editor h-[500px] w-[500px]">
          <Canvas>
            <MyElement3D />
          </Canvas>
        </div>
      </section>
    </article>
  );
}
