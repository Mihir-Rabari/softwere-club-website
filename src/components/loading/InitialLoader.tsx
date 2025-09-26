"use client";

import * as React from "react";
import { Ripple } from "@/components/magicui/ripple";

export default function InitialLoader() {
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    const MIN_DURATION_MS = 2500; // at least 3s
    const FALLBACK_EXTRA_MS = 7000; // hide even if load never fires (total ~10s max)
    const start = Date.now();
    let hideTimeout: number | undefined;
    let fallbackTimeout: number | undefined;

    const scheduleHideAfterMin = () => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(MIN_DURATION_MS - elapsed, 0);
      if (hideTimeout) window.clearTimeout(hideTimeout);
      hideTimeout = window.setTimeout(() => setVisible(false), remaining);
    };

    const onLoad = () => scheduleHideAfterMin();

    if (document.readyState === "complete") {
      scheduleHideAfterMin();
    } else {
      window.addEventListener("load", onLoad);
    }

    // Final safety: ensure it will close even if the load event never fires
    fallbackTimeout = window.setTimeout(() => {
      scheduleHideAfterMin();
    }, MIN_DURATION_MS + FALLBACK_EXTRA_MS);

    return () => {
      window.removeEventListener("load", onLoad);
      if (hideTimeout) window.clearTimeout(hideTimeout);
      if (fallbackTimeout) window.clearTimeout(fallbackTimeout);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-live="polite"
      aria-busy="true"
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-background"
    >
      <Ripple className="opacity-90" mainCircleOpacity={0.22} numCircles={9} />
      <div className="relative z-10 text-2xl sm:text-3xl font-medium text-foreground">
        Loda Ubhore🤚...
      </div>
    </div>
  );
}
