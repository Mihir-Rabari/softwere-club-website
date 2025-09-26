"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function TextReveal({
  children,
  as = "p",
  className,
  stagger = 0.045,
  delay = 0,
  y = 8,
}: {
  children: string;
  as?: "p" | "span" | "div";
  className?: string;
  stagger?: number;
  delay?: number;
  y?: number;
}) {
  const words = React.useMemo(() => children.split(/\s+/), [children]);
  const parent = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };
  const item = {
    hidden: { opacity: 0, y },
    show: { opacity: 1, y: 0 },
  };

  const MotionWrapper =
    as === "span" ? motion.span : as === "div" ? motion.div : motion.p;

  return (
    <MotionWrapper
      className={cn("leading-relaxed", className)}
      variants={parent}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
    >
      {words.map((w, i) => (
        <motion.span
          key={i}
          variants={item}
          className="inline-block mr-[0.3em]"
        >
          {w}
        </motion.span>
      ))}
    </MotionWrapper>
  );
}
