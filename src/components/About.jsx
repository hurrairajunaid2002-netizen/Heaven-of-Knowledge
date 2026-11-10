import { BookOpen, Compass, Lightbulb } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/config/siteConfig";

const PILLARS = [
  {
    icon: BookOpen,
    title: "Accessible Knowledge",
    description: "We believe valuable books should be easy to find and easy to own.",
    accent: "gold",
  },
  {
    icon: Lightbulb,
    title: "Thoughtful Curation",
    description: "Every title on our shelf is chosen for the value it brings to the reader.",
    accent: "sky",
  },
  {
    icon: Compass,
    title: "A Culture of Reading",
    description: "We exist to make discovering your next book simple, personal, and enjoyable.",
    accent: "terracotta",
  },
];

const ACCENT_STYLES = {
  gold: "bg-gold-soft/60 text-navy",
  sky: "bg-sky-soft text-sky",
  terracotta: "bg-terracotta-soft text-terracotta",
};

export default function About() {
  return (
    <section id="about" className="bg-paper py-24 sm:py-28">
      <Container className="flex flex-col items-center gap-16">
        <SectionHeading
          eyebrow="About Us"
          title={`Why ${siteConfig.name} Exists`}
          description="We started Heaven of Knowledge with a simple belief: that the right book, at the right time, can change how someone thinks. Our mission is to make meaningful books accessible, help readers discover titles worth their time, and share knowledge without unnecessary friction."
        />

        <div className="grid w-full gap-8 sm:grid-cols-3">
          {PILLARS.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 0.1}>
              <div className="flex h-full flex-col items-center gap-4 rounded-2xl border border-beige bg-ivory p-8 text-center shadow-sm shadow-navy/5">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-full ${ACCENT_STYLES[pillar.accent]}`}
                >
                  <pillar.icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                </span>
                <h3 className="font-serif text-lg font-semibold text-navy">{pillar.title}</h3>
                <p className="text-sm leading-relaxed text-ink-soft">{pillar.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
