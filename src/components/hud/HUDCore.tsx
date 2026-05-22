import { motion } from "framer-motion";
import { ReactNode } from "react";
import { HUDGrid } from "./HUDGrid";
import { HUDScanlines } from "./HUDScanlines";
import { HUDNoise } from "./HUDNoise";
import { HUDFrame } from "./HUDFrame";
import { HUDCorners } from "./HUDCorners";

interface HUDCoreProps {
  children: ReactNode;
  className?: string;
}

export function HUDCore({ children, className = "" }: HUDCoreProps) {
  return (
    <div className={`relative min-h-screen w-full overflow-hidden bg-background text-foreground ${className}`}>
      {/* Фон */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,oklch(0.22_0.12_295_/_0.35),transparent_60%),radial-gradient(ellipse_at_bottom_right,oklch(0.32_0.18_220_/_0.25),transparent_55%)]" />
      
      {/* Слои HUD */}
      <HUDGrid />
      <HUDScanlines />
      <HUDNoise />
      <HUDFrame />
      <HUDCorners />
      
      {/* Контент */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
