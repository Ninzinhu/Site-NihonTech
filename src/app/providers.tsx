"use client";

import ParticleBackground from "@/components/ParticleBackground";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ParticleBackground />
      {children}
    </>
  );
}

