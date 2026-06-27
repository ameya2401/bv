"use client";

import type { ReactNode } from "react";
import Footer from "@/components/Footer";
import InstitutionalHeader from "@/components/InstitutionalHeader";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";

import dynamic from "next/dynamic";

const DarkVeil = dynamic(() => import("@/components/ui/DarkVeil"), { ssr: false });

interface SiteShellProps {
  children: ReactNode;
  className?: string;
}

export default function SiteShell({ children, className }: SiteShellProps) {
  return (
    <div
      className={cn(
        "min-h-screen bg-background text-foreground transition-colors duration-300 relative",
        className,
      )}
    >
      {/* DarkVeil Background (Only visible in Dark Mode) */}
      <div className="hidden dark:block fixed inset-0 z-0 pointer-events-none opacity-20">
        <DarkVeil 
          hueShift={0}
          noiseIntensity={0.03}
          scanlineIntensity={0.02}
          speed={0.4}
          scanlineFrequency={0.2}
          warpAmount={0.05}
          resolutionScale={0.75}
        />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <InstitutionalHeader />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
