"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, MessageCircle, X } from "lucide-react";
import BookCover from "@/components/BookCover";
import { formatPrice, getBookWhatsAppLink } from "@/lib/whatsapp";

const STATUS_LABEL = {
  "in-stock": "In Stock",
  "out-of-stock": "Out of Stock",
  "pre-order": "Pre-Order",
};

export default function BookDetails({ book, onClose }) {
  useEffect(() => {
    if (!book) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [book, onClose]);

  const hasDiscount = book && book.originalPrice && book.originalPrice > book.price;

  return (
    <AnimatePresence>
      {book && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-navy/60 p-4 backdrop-blur-sm sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${book.title} details`}
        >
          <motion.div
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-ivory p-6 shadow-2xl sm:p-10"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close book details"
              className="absolute right-4 top-4 rounded-full bg-beige/50 p-2 text-navy transition-colors hover:bg-beige"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid gap-8 sm:grid-cols-[0.7fr_1.3fr]">
              <BookCover book={book} className="mx-auto max-w-[200px] sm:max-w-full" />

              <div className="flex flex-col gap-4">
                <span className="w-fit rounded-full bg-sky-soft px-3 py-1 font-sans text-xs font-semibold uppercase tracking-wide text-sky">
                  {book.category}
                </span>
                <h3 className="font-serif text-2xl font-semibold text-navy sm:text-3xl">
                  {book.title}
                </h3>
                <p className="font-sans text-sm uppercase tracking-[0.2em] text-ink-soft">
                  by {book.author}
                </p>
                <p className="text-sm leading-relaxed text-ink-soft sm:text-base">
                  {book.description}
                </p>

                <ul className="flex flex-col gap-2">
                  {book.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2 text-sm text-ink">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <dl className="grid grid-cols-3 gap-3 border-y border-beige py-4 text-center font-sans text-xs text-ink-soft">
                  <div>
                    <dt className="uppercase tracking-wide">Pages</dt>
                    <dd className="mt-1 font-semibold text-navy">{book.details.pages}</dd>
                  </div>
                  <div>
                    <dt className="uppercase tracking-wide">Language</dt>
                    <dd className="mt-1 font-semibold text-navy">{book.details.language}</dd>
                  </div>
                  <div>
                    <dt className="uppercase tracking-wide">Format</dt>
                    <dd className="mt-1 font-semibold text-navy">{book.details.format}</dd>
                  </div>
                </dl>

                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif text-2xl font-semibold text-navy">
                      {formatPrice(book.price, book.currency)}
                    </span>
                    {hasDiscount && (
                      <span className="font-sans text-sm text-ink-soft line-through">
                        {formatPrice(book.originalPrice, book.currency)}
                      </span>
                    )}
                  </div>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 font-sans text-xs font-semibold text-emerald-700">
                    {STATUS_LABEL[book.status]}
                  </span>
                </div>

                <a
                  href={getBookWhatsAppLink(book)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-navy to-navy-soft px-6 py-3 font-sans text-sm font-semibold text-ivory shadow-lg shadow-navy/20 transition-transform hover:scale-[1.02] sm:w-auto"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden />
                  Buy via WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
