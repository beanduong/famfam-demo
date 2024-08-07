"use client";

import { Canvas } from "@react-three/fiber";
import { Logo } from "@/components/Logo";
import Link from "next/link";
import { CameraController } from "@/components/CameraController";
import { Vector3 } from "three";

export default function Home() {
  const positionCamera = new Vector3(0, 0, 10);
  const ringSpeed = 0.02;
  const circleSpeed = 0.06;
  const dragRotationSpeed = 4;
  const zoomSpeed = 2;
  const enableZoom = true;
  const snappingDelay = 2000;
  return (
    <main className="absolute inset-0">
      <div
        className="absolute inset-0 animate-diagonal"
        style={{
          background: "url('/clouds.png') repeat",
        }}
      />
      <Canvas
        camera={{
          position: positionCamera,
          fov: 100,
          near: 0.1,
          far: 1000,
        }}
      >
        <CameraController
          positionCamera={positionCamera}
          dragRotationSpeed={dragRotationSpeed}
          enableZoom={enableZoom}
          snappingDelay={snappingDelay}
          zoomSpeed={zoomSpeed}
        />
        <ambientLight intensity={2.0} />
        <Logo
          radiusRing={4}
          radiusInner={3.9}
          ringSpeed={ringSpeed}
          circleSpeed={circleSpeed}
        />
      </Canvas>

      <div className="absolute bottom-4 md:bottom-8 inset-x-4 md:inset-x-8 flex justify-center">
        <ul className="flex gap-1 md:gap-8 md:flex-row flex-col items-center">
          <li>
            <NavLink href="/app-terms-of-use">App Terms of Use</NavLink>
          </li>
          <li>
            <NavLink href="/data-protection-notice">
              Data Protection Notice
            </NavLink>
          </li>
          <li>
            <NavLink href="/legal-notice">Legal Notice</NavLink>
          </li>
        </ul>
      </div>
    </main>
  );
}

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link href={href} className="relative" scroll={false}>
    <span className="uppercase font-bold md:text-xs text-[0.6rem]">
      {children}
    </span>
    <span className="absolute inset-x-0 bottom-0 h-px bg-black" />
  </Link>
);
