"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Globe } from "@/components/magicui/globe";
import { LineShadowText } from "@/components/magicui/line-shadow-text";
import { TextReveal } from "@/components/magicui/text-reveal";
import Link from "next/link";

type CSSVars = React.CSSProperties & { [key: string]: string | number | undefined };

export default function Hero() {
  return (
    <div className="relative min-h-[88vh] flex items-center bg-grid bg-vignette">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 items-center gap-10">
          <div className="relative max-w-3xl">
          <LineShadowText
            as="h1"
            shadowColor="black"
            className={cn(
              "text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight"
            )}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ "--animate-line-shadow": "line-shadow 30s linear infinite" } as CSSVars}
          >
            Where Coding Meets Creativity
          </LineShadowText>

          <TextReveal
            as="p"
            className="mt-4 text-foreground max-w-2xl"
            delay={0.1}
          >
            Official Software Club of our college. We build, ship, and learn together — from coding sprints and AI/ML to open-source, design, and hackathons.
          </TextReveal>

          <motion.div
            className="mt-8 flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Link
              href="#contact"
              className={cn(
                "inline-flex items-center justify-center rounded-md font-medium border border-border bg-accent text-accent-foreground hover:opacity-90 h-12 px-6 text-base"
              )}
            >
              Join the Club
            </Link>
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center rounded-md font-medium border border-border bg-transparent text-foreground hover:bg-muted h-12 px-6 text-base"
            >
              View Gallery
            </Link>
          </motion.div>
          </div>

          <div className="hidden md:block">
            <Globe />
          </div>
        </div>
      </div>
    </div>
  );
}
