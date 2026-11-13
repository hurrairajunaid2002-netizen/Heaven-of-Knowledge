"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, Menu, MessageCircle, X } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { getGeneralWhatsAppLink } from "@/lib/whatsapp";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pendingHash, setPendingHash] = useState(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    // iOS Safari ignores `overflow: hidden` on body and keeps rubber-band
    // scrolling the page underneath the open menu. Any stray scroll during a
    // tap gets interpreted as a drag, which cancels the synthetic click on
    // nav links. Locking scroll via fixed position prevents that.
    const scrollY = window.scrollY;
    const { body } = document;
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";

    return () => {
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      window.scrollTo(0, scrollY);
    };
  }, [isMenuOpen]);

  // Runs after the scroll-lock cleanup above has released `position: fixed`
  // on body. Scrolling while that's still applied is a no-op, which is why
  // this has to wait rather than scroll immediately on click.
  useEffect(() => {
    if (isMenuOpen || !pendingHash) return;
    const target = document.querySelector(pendingHash);
    // A double rAF ensures the browser has actually painted the unlocked
    // layout before the smooth scroll starts; starting it in the same tick
    // as the unlock intermittently gets silently dropped.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        target?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
    window.history.pushState(null, "", pendingHash);
    setPendingHash(null);
  }, [isMenuOpen, pendingHash]);

  const handleMobileNavClick = (event, href) => {
    event.preventDefault();
    setIsMenuOpen(false);
    setPendingHash(href);
  };

  const whatsappLink = getGeneralWhatsAppLink();

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-ivory/90 shadow-sm shadow-navy/5 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        <a
          href="#home"
          className="flex items-center gap-2 font-serif text-lg font-semibold tracking-tight text-navy"
        >
          <BookOpen className="h-6 w-6 text-gold" strokeWidth={1.75} aria-hidden />
          {siteConfig.name}
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {siteConfig.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="font-sans text-sm font-medium text-ink-soft transition-colors hover:text-navy"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 font-sans text-sm font-semibold text-ivory transition-colors hover:bg-navy-soft"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            WhatsApp Us
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="inline-flex items-center justify-center rounded-full p-2 text-navy lg:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-beige bg-ivory lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(event) => handleMobileNavClick(event, item.href)}
                    className="block rounded-lg px-3 py-3 font-sans text-base font-medium text-ink transition-colors hover:bg-beige/40"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-full bg-navy px-5 py-3 font-sans text-sm font-semibold text-ivory"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden />
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
