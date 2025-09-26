"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { achievements } from "@/data/achievements";

export default function Achievements() {
  return (
    <Section id="achievements">
      <SectionHeading
        title="Achievements & Highlights"
        subtitle="Celebrating wins from hackathons, coding contests, and impactful projects."
        center
      />

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((a, i) => (
          <motion.div
            key={a.title}
            className="p-6 rounded-xl border border-border bg-card/60"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          >
            <div className="text-sm text-foreground">{a.year}</div>
            <div className="font-semibold text-lg">{a.title}</div>
            <div className="text-sm text-foreground">{a.by}</div>
            {a.description && (
              <p className="text-sm text-foreground mt-2">{a.description}</p>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
