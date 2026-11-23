import { Certificates } from "@/components/certificates";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { SelectedWork } from "@/components/selected-work";
import { Services } from "@/components/services";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SkillsMarquee } from "@/components/skills-marquee";
import { TechStack } from "@/components/tech-stack";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <SkillsMarquee />
        <SelectedWork />
        <Services />
        <TechStack />
        <Certificates />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
