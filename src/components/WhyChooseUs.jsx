import { MessageCircle, PackageCheck, ShieldCheck, Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const FEATURES = [
  {
    icon: MessageCircle,
    title: "Order via WhatsApp",
    description: "No complicated checkout. Message us directly and we'll guide you through the order.",
    accent: "gold",
  },
  {
    icon: Sparkles,
    title: "Carefully Selected Books",
    description: "Every title is reviewed for the value and quality it brings to our readers.",
    accent: "sky",
  },
  {
    icon: PackageCheck,
    title: "Simple Purchasing",
    description: "Pick a book, send a message, and we'll take care of the rest.",
    accent: "terracotta",
  },
  {
    icon: ShieldCheck,
    title: "Direct Communication",
    description: "Speak with us personally — no bots, no confusing forms, just real conversation.",
    accent: "gold",
  },
];

const ACCENT_STYLES = {
  gold: "bg-gold/15 text-gold-light",
  sky: "bg-sky/20 text-sky-light",
  terracotta: "bg-terracotta/20 text-terracotta-light",
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-navy py-24 sm:py-28">
      <Container className="flex flex-col items-center gap-16">
        <SectionHeading
          tone="dark"
          eyebrow="Why Choose Us"
          title="A Simpler Way to Buy Books"
          description="We've removed the friction of traditional online shopping so you can focus on what matters — finding your next great read."
        />

        <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 0.08}>
              <div className="flex h-full flex-col items-start gap-4 rounded-2xl border border-ivory/10 bg-navy-light p-7">
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-full ${ACCENT_STYLES[feature.accent]}`}
                >
                  <feature.icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                </span>
                <h3 className="font-serif text-lg font-semibold text-ivory">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-ivory/70">{feature.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
