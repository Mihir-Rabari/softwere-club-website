import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Committee from "@/components/sections/Committee";
import Events from "@/components/sections/Events";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";
import { ScrollVelocityContainer, ScrollVelocityRow } from "@/components/magicui/scroll-based-velocity";
import SmoothDivider from "@/components/ui/SmoothDivider";
import BeamDivider from "@/components/ui/dividers/BeamDivider";
import GridDivider from "@/components/ui/dividers/GridDivider";
import DotsDivider from "@/components/ui/dividers/DotsDivider";

export default function Home() {
  return (
    <>
      <Hero />
      <BeamDivider />
      <About />
      <GridDivider />
      <ScrollVelocityContainer className="py-10 text-2xl sm:text-4xl font-bold tracking-wide uppercase">
        <ScrollVelocityRow baseVelocity={18} direction={1}>
          <div className="flex items-center gap-10">
            <span className="text-accent">Build</span>
            <span className="text-foreground">Ship</span>
            <span className="text-foreground">Learn</span>
            <span className="text-foreground">Open Source</span>
            <span className="text-foreground">Hackathons</span>
          </div>
        </ScrollVelocityRow>
        <ScrollVelocityRow baseVelocity={18} direction={-1}>
          <div className="flex items-center gap-10">
            <span className="text-foreground">Community</span>
            <span className="text-accent">Events</span>
            <span className="text-foreground">Projects</span>
            <span className="text-foreground">Mentorship</span>
            <span className="text-foreground">Workshops</span>
          </div>
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
      <DotsDivider />
      <Committee />
      <BeamDivider />
      <Events />
      <GridDivider />
      <Achievements />
      <SmoothDivider intensity="subtle" />
      <Contact />
    </>
  );
}
