"use client";

import React from "react";

/**
 * Matrix-style falling code rain background.
 * Inspired by magicui / react-bits backgrounds.
 */
export default function MatrixBackground({
  className,
  density = 20,
  speed = 40,
}: {
  className?: string;
  density?: number; // higher = more columns
  speed?: number; // higher = faster
}) {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const rafRef = React.useRef<number | null>(null);
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    // fade-in container
    if (containerRef.current) {
      // start at 0, transition to 1
      containerRef.current.style.opacity = "1";
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener("resize", handleResize);

    const columnCount = Math.floor(width / density);
    const characters = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズヅブプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポ012345789ABCDEF";
    const chars = characters.split("");

    let drops: number[] = [];
    const init = () => {
      drops = new Array(Math.floor(width / density) + 1).fill(0);
    };

    init();

    const draw = () => {
      // fade canvas to create trail
      ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = getComputedStyle(document.documentElement)
        .getPropertyValue("--accent")
        .trim() || "#00ff88";
      ctx.font = `${density}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * density;
        const y = drops[i] * density;
        ctx.fillText(text, x, y);

        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += speed / 60; // speed factor
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [density, speed]);

  return (
    <div
      ref={containerRef}
      className={className}
      aria-hidden
      style={{ opacity: 0, transition: "opacity 1200ms ease-out" }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
    </div>
  );
}
