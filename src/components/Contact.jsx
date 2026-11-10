import { Mail, MapPin, MessageCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/config/siteConfig";
import { getGeneralWhatsAppLink } from "@/lib/whatsapp";

export default function Contact() {
  const whatsappLink = getGeneralWhatsAppLink();

  return (
    <section id="contact" className="bg-ivory py-24 sm:py-28">
      <Container className="flex flex-col items-center gap-12">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Find Your Next Book Together"
          description="Have a question about a title, or want a recommendation? Reach out — we reply personally, every time."
        />

        <Reveal className="w-full max-w-2xl">
          <div className="flex flex-col items-center gap-8 rounded-3xl border border-beige bg-gradient-to-br from-paper via-paper to-terracotta-soft/40 p-10 text-center shadow-sm shadow-navy/5 sm:p-14">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-navy to-navy-soft px-8 py-4 font-sans text-sm font-semibold text-ivory shadow-lg shadow-navy/20 transition-transform hover:scale-[1.02]"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              Chat with us on WhatsApp
            </a>

            <div className="flex flex-col gap-4 font-sans text-sm text-ink-soft sm:flex-row sm:gap-10">
              <span className="flex items-center justify-center gap-2">
                <MessageCircle className="h-4 w-4 text-gold" aria-hidden />
                {siteConfig.whatsappDisplay}
              </span>
              <span className="flex items-center justify-center gap-2">
                <Mail className="h-4 w-4 text-gold" aria-hidden />
                {siteConfig.email}
              </span>
              <span className="flex items-center justify-center gap-2">
                <MapPin className="h-4 w-4 text-gold" aria-hidden />
                {siteConfig.address}
              </span>
            </div>

            <p className="max-w-md text-sm leading-relaxed text-ink-soft">
              Every message is answered by a real person. Thank you for choosing{" "}
              {siteConfig.name} — we look forward to helping you find your next great read.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
