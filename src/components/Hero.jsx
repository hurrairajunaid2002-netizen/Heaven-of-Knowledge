import { ArrowRight, MessageCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import HeroDecor from "@/components/HeroDecor";
import BookCover from "@/components/BookCover";
import { siteConfig } from "@/config/siteConfig";
import { getFeaturedBook } from "@/data/books";
import { getGeneralWhatsAppLink } from "@/lib/whatsapp";

export default function Hero() {
  const featuredBook = getFeaturedBook();
  const whatsappLink = getGeneralWhatsAppLink();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-ivory via-ivory to-paper pt-28 pb-20"
    >
      <HeroDecor />

      <Container className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col items-start gap-6 text-left">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold-soft/40 px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-navy">
              A Premium Online Bookstore
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="max-w-xl font-serif text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
              Step into your{" "}
              <span className="italic text-gold">Heaven of Knowledge</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="max-w-lg text-base leading-relaxed text-ink-soft sm:text-lg">
              {siteConfig.description}
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#books"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-navy to-navy-soft px-7 py-3.5 font-sans text-sm font-semibold text-ivory shadow-lg shadow-navy/20 transition-transform hover:scale-[1.02]"
              >
                Explore Books
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-navy/15 bg-transparent px-7 py-3.5 font-sans text-sm font-semibold text-navy transition-colors hover:bg-navy/5"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                Contact on WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="flex items-center gap-6 pt-4 font-sans text-xs uppercase tracking-[0.15em] text-ink-soft">
              <span>Curated Selection</span>
              <span className="h-1 w-1 rounded-full bg-gold" />
              <span>Direct WhatsApp Ordering</span>
            </div>
          </Reveal>
        </div>

        <Reveal direction="left" delay={0.2} className="mx-auto w-full max-w-sm">
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-gold-soft/60 via-sky-soft/40 to-terracotta-soft/30 blur-2xl" />
            <BookCover book={featuredBook} priority className="mx-auto max-w-xs" />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
