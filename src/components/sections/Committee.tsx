"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { committee } from "@/data/committee";
import { Github, Linkedin, Instagram } from "lucide-react";

export default function Committee() {
  return (
    <Section id="committee">
      <SectionHeading
        title="Committee Members"
        subtitle="Meet the team behind events, mentorship, and projects."
        center
      />

      <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {committee.map((m, idx) => (
          <motion.div
            key={m.name}
            className="group relative overflow-hidden rounded-xl border border-border bg-card/60 p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.03 }}
          >
            <div className="h-24 w-24 rounded-full bg-gradient-to-br from-accent/30 to-accent/0 border border-border grayscale group-hover:grayscale-0 transition-all" />
            <h3 className="mt-4 font-semibold text-lg">{m.name}</h3>
            <p className="text-sm text-foreground">{m.role}</p>

            <div className="mt-4 flex items-center gap-3 text-foreground">
              {m.github && (
                <a href={m.github} target="_blank" rel="noreferrer" className="hover:text-foreground">
                  <Github size={18} />
                </a>
              )}
              {m.linkedin && (
                <a href={m.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground">
                  <Linkedin size={18} />
                </a>
              )}
              {m.instagram && (
                <a href={m.instagram} target="_blank" rel="noreferrer" className="hover:text-foreground">
                  <Instagram size={18} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
