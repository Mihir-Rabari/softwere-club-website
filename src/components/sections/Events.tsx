"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { upcoming, past } from "@/data/events";

export default function Events() {
  return (
    <Section id="events">
      <SectionHeading
        title="Events & Projects"
        subtitle="Upcoming workshops and hackathons, plus highlights from recent events."
        center
      />

      <div className="mt-10 grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-accent font-semibold">Upcoming</h3>
          <div className="mt-4 space-y-4">
            {upcoming.map((e, i) => (
              <motion.a
                key={e.title}
                href={e.link || "#"}
                className="block p-4 rounded-md border border-border bg-muted/40 hover:bg-muted/60 transition-colors"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <div className="text-sm text-foreground">{e.date}</div>
                <div className="font-semibold">{e.title}</div>
                <p className="text-sm text-foreground mt-1">{e.description}</p>
              </motion.a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-accent font-semibold">Past</h3>
          <div className="mt-4 space-y-4">
            {past.map((e, i) => (
              <motion.div
                key={e.title}
                className="p-4 rounded-md border border-border bg-muted/30"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <div className="text-sm text-foreground">{e.date}</div>
                <div className="font-semibold">{e.title}</div>
                <p className="text-sm text-foreground mt-1">{e.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
