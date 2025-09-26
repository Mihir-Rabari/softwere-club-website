import { committee } from "@/data/committee";
import { Github, Linkedin, Instagram } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

export default function CommitteePage() {
  return (
    <Section className="py-16">
      <SectionHeading
        title="Our Committee"
        subtitle="Meet the team driving the Software Club's vision and initiatives."
        center
      />

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {committee.map((m) => (
          <div
            key={m.name}
            className="group relative overflow-hidden rounded-xl border border-border bg-card/60 p-6"
          >
            <div className="h-32 w-32 mx-auto rounded-full bg-gradient-to-br from-accent/30 to-accent/0 border border-border grayscale group-hover:grayscale-0 transition-all" />
            <h3 className="mt-6 text-center text-xl font-semibold">{m.name}</h3>
            <p className="text-center text-foreground">{m.role}</p>

            <div className="mt-4 flex justify-center gap-4">
              {m.github && (
                <a
                  href={m.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground hover:text-accent transition-colors"
                  aria-label={`${m.name}'s GitHub`}
                >
                  <Github size={20} />
                </a>
              )}
              {m.linkedin && (
                <a
                  href={m.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground hover:text-accent transition-colors"
                  aria-label={`${m.name}'s LinkedIn`}
                >
                  <Linkedin size={20} />
                </a>
              )}
              {m.instagram && (
                <a
                  href={m.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground hover:text-accent transition-colors"
                  aria-label={`${m.name}'s Instagram`}
                >
                  <Instagram size={20} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
