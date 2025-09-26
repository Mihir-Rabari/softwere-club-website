"use client";

import * as React from "react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

export default function Contact() {
  return (
    <Section id="contact">
      <SectionHeading
        title="Contact & Join Us"
        subtitle="Have questions or want to participate? Reach out or join our events."
        center
      />

      <div className="mt-10 grid lg:grid-cols-2 gap-8">
        <motion.div
          className="p-6 rounded-xl border border-border bg-card/60"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-semibold text-lg">Get in touch</h3>
          <p className="text-sm text-foreground mt-2">
            You can email us or connect via social links below. New members are always welcome!
          </p>

          <div className="mt-4 flex items-center gap-4 text-foreground">
            <a href="mailto:softwareclub@example.com" className="hover:text-foreground flex items-center gap-2">
              <Mail size={18} /> Email
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-foreground flex items-center gap-2">
              <Github size={18} /> GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-foreground flex items-center gap-2">
              <Linkedin size={18} /> LinkedIn
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-foreground flex items-center gap-2">
              <Instagram size={18} /> Instagram
            </a>
          </div>
        </motion.div>

        <motion.form
          className="p-6 rounded-xl border border-border bg-card/60 grid gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget as HTMLFormElement;
            const data = new FormData(form);
            const subject = encodeURIComponent("Software Club - Join Request");
            const body = encodeURIComponent(
              `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nMessage: ${data.get("message")}`
            );
            window.location.href = `mailto:softwareclub@example.com?subject=${subject}&body=${body}`;
          }}
        >
          <div className="grid sm:grid-cols-2 gap-3">
            <input name="name" placeholder="Name" required className="h-11 px-3 rounded-md bg-background border border-border" />
            <input name="email" type="email" placeholder="Email" required className="h-11 px-3 rounded-md bg-background border border-border" />
          </div>
          <textarea name="message" placeholder="Your message" rows={5} className="mt-1 px-3 py-2 rounded-md bg-background border border-border" />
          <button type="submit" className="mt-2 inline-flex items-center justify-center rounded-md font-medium border border-border bg-accent text-accent-foreground hover:opacity-90 h-11 px-5 text-sm">
            Send Message
          </button>
        </motion.form>
      </div>
    </Section>
  );
}
