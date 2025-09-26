"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <Section id="about">
      <SectionHeading
        title="About the Club"
        subtitle="We are a student community passionate about software engineering, AI/ML, open-source, and solving real problems."
        center
      />

      <div className="mt-8 grid md:grid-cols-2 gap-8">
        <motion.div
          className="p-6 rounded-lg border border-border bg-card/60"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-lg font-semibold text-accent">Mission</h3>
          <p className="mt-2 text-foreground">
            Build a collaborative environment where students learn by doing —
            through workshops, projects, and contributions to open-source.
          </p>
        </motion.div>

        <motion.div
          className="p-6 rounded-lg border border-border bg-card/60"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          <h3 className="text-lg font-semibold text-accent">Vision</h3>
          <p className="mt-2 text-foreground">
            Empower students to build impactful software and prepare for industry —
            fostering leadership, innovation, and community.
          </p>
        </motion.div>
      </div>

      <motion.ul
        className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {[
          "Coding & Software Engineering",
          "AI/ML & Data Science",
          "Open-Source & GitHub",
          "Hackathons & Projects",
        ].map((item, i) => (
          <motion.li
            key={item}
            className="p-4 rounded-md border border-border/60 bg-muted/40"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          >
            <span className="text-accent mr-2">▣</span>
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  );
}
