import { AtSign, BookOpen, Globe, MessageCircle, Share2 } from "lucide-react";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/config/siteConfig";
import { getGeneralWhatsAppLink } from "@/lib/whatsapp";

export default async function Footer() {
  "use cache";

  const whatsappLink = getGeneralWhatsAppLink();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ivory/10 bg-navy py-14 text-ivory/80">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex max-w-sm flex-col gap-3">
            <a href="#home" className="flex items-center gap-2 font-serif text-lg font-semibold text-ivory">
              <BookOpen className="h-5 w-5 text-gold" strokeWidth={1.75} aria-hidden />
              {siteConfig.name}
            </a>
            <p className="text-sm leading-relaxed text-ivory/60">{siteConfig.tagline}</p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-ivory/70 transition-colors hover:text-gold-light">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-ivory transition-colors hover:text-gold-light"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              {siteConfig.whatsappDisplay}
            </a>
            {/* lucide-react no longer ships brand icons; swap these for real
                brand SVGs whenever you're ready. */}
            <div className="flex gap-4">
              <a href={siteConfig.social.instagram} aria-label="Instagram" className="text-ivory/60 hover:text-gold-light">
                <AtSign className="h-5 w-5" />
              </a>
              <a href={siteConfig.social.facebook} aria-label="Facebook" className="text-ivory/60 hover:text-gold-light">
                <Globe className="h-5 w-5" />
              </a>
              <a href={siteConfig.social.twitter} aria-label="Twitter" className="text-ivory/60 hover:text-gold-light">
                <Share2 className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 border-t border-ivory/10 pt-6 text-center text-xs text-ivory/50 sm:flex-row sm:justify-between">
          <span>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </span>
          <span>Built with care, for readers everywhere.</span>
        </div>
      </Container>
    </footer>
  );
}
