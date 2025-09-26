import * as React from "react";
import { cn } from "@/lib/utils";

export default function BeamDivider({ className }: { className?: string }) {
  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      <div className="h-px w-full bg-border/60" />
      <div
        aria-hidden
        className="h-10 w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, color-mix(in oklab, var(--accent) 35%, transparent), transparent)",
          backgroundSize: "200% 100%",
          animation: "var(--animate-beam-sweep)",
          opacity: 0.5,
          maskImage:
            "linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)",
        } as React.CSSProperties}
      />
    </div>
  );
}
