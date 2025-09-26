import * as React from "react";
import { cn } from "@/lib/utils";

export default function GridDivider({ className }: { className?: string }) {
  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      {/* animated grid */}
      <div
        aria-hidden
        className="h-16 w-full"
        style={{
          backgroundImage:
            `linear-gradient(to right, color-mix(in oklab, var(--border) 55%, transparent) 1px, transparent 1px),` +
            `linear-gradient(to bottom, color-mix(in oklab, var(--border) 55%, transparent) 1px, transparent 1px)`,
          backgroundSize: "24px 24px, 24px 24px",
          animation: "var(--animate-grid-pan)",
          opacity: 0.5,
          maskImage: "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
        } as React.CSSProperties}
      />
    </div>
  );
}
