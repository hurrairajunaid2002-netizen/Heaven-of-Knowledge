import { Mail, MessageCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/config/siteConfig";
import { getGeneralWhatsAppLink } from "@/lib/whatsapp";

const contactMethods = (whatsappLink) => [
  {
    label: "WhatsApp",
    value: siteConfig.whatsappDisplay,
    href: whatsappLink,
    icon: MessageCircle,
  },
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
  },
];

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
          <div className="flex flex-col items-center gap-10 rounded-3xl border border-beige bg-gradient-to-br from-paper via-paper to-terracotta-soft/40 p-10 text-center shadow-sm shadow-navy/5 sm:p-14">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-navy to-navy-soft px-8 py-4 font-sans text-sm font-semibold text-ivory shadow-lg shadow-navy/20 transition-transform hover:scale-[1.02]"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              Chat with us on WhatsApp
            </a>

            <div className="grid w-full gap-4 sm:grid-cols-2">
              {contactMethods(whatsappLink).map(({ label, value, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex min-w-0 items-center gap-4 rounded-2xl border border-beige/80 bg-ivory/70 p-5 text-left transition-colors hover:border-gold/40 hover:bg-ivory"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-soft/60 text-gold">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="flex min-w-0 flex-col gap-0.5">
                    <span className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-ink-soft">
                      {label}
                    </span>
                    <span className="truncate font-sans text-sm font-medium text-navy">
                      {value}
                    </span>
                  </span>
                </a>
              ))}
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
