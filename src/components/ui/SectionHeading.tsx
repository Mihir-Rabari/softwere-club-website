"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function SectionHeading({
  title,
  subtitle,
  center = false,
  className,
}: {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}) {
  return (
    <div className={cn(center && "text-center", className)}>
      <motion.h2
        className={cn(
          "text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight"
        )}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-accent">#</span> {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          className="mt-2 text-sm text-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
