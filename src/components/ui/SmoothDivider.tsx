import * as React from "react";
import { cn } from "@/lib/utils";

interface SmoothDividerProps extends React.HTMLAttributes<HTMLDivElement> {
  intensity?: "subtle" | "normal" | "strong";
}

export default function SmoothDivider({
  className,
  intensity = "normal",
  ...props
}: SmoothDividerProps) {
  const fadeHeight = intensity === "subtle" ? 16 : intensity === "strong" ? 40 : 28;
  const lineOpacity = intensity === "subtle" ? 0.4 : intensity === "strong" ? 0.9 : 0.7;

  return (
    <div className={cn("relative w-full", className)} {...props}>
      {/* center gradient hairline */}
      <div
        className="h-px w-full"
        style={{
          background: `linear-gradient(90deg, rgba(0,0,0,0), color-mix(in oklab, var(--border) ${lineOpacity *
            100}%, transparent), rgba(0,0,0,0))`,
        }}
      />
      {/* vertical fade */}
      <div
        className="w-full"
        style={{
          height: `${fadeHeight}px`,
          background: `linear-gradient(180deg, color-mix(in oklab, var(--border) 18%, transparent) 0%, transparent 100%)`,
        }}
      />
    </div>
  );
}
