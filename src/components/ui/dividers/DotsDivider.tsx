import * as React from "react";
import { cn } from "@/lib/utils";

export default function DotsDivider({ className }: { className?: string }) {
  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      <div
        aria-hidden
        className="h-12 w-full"
        style={{
          backgroundImage: `radial-gradient(circle, color-mix(in oklab, var(--border) 60%, transparent) 2px, transparent 2px)`,
          backgroundSize: "18px 18px",
          backgroundPosition: "0 0",
          opacity: 0.45,
          animation: "var(--animate-grid-pan)",
          maskImage:
            "linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)",
        } as React.CSSProperties}
      />
    </div>
  );
}
