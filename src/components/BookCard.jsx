"use client";

import { motion } from "framer-motion";
import { MessageCircle, Star } from "lucide-react";
import BookCover from "@/components/BookCover";
import { formatPrice, getBookWhatsAppLink } from "@/lib/whatsapp";

const STATUS_LABEL = {
  "in-stock": "In Stock",
  "out-of-stock": "Out of Stock",
  "pre-order": "Pre-Order",
};

export default function BookCard({ book, onSelect, className = "" }) {
  const hasDiscount = book.originalPrice && book.originalPrice > book.price;

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`group flex flex-col overflow-hidden rounded-2xl border border-beige bg-ivory shadow-sm shadow-navy/5 transition-shadow hover:shadow-xl hover:shadow-navy/10 ${className}`}
    >
      <button
        type="button"
        onClick={() => onSelect(book)}
        className="relative block w-full overflow-hidden bg-paper p-6 text-left"
        aria-label={`View details for ${book.title}`}
      >
        {book.featured && (
          <span className="absolute left-4 top-4 z-10 inline-flex items-center gap-1 rounded-full bg-gold px-3 py-1 font-sans text-[0.65rem] font-semibold uppercase tracking-wide text-navy">
            <Star className="h-3 w-3 fill-current" aria-hidden />
            Featured
          </span>
        )}
        <BookCover
          book={book}
          className="mx-auto max-w-[180px] transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </button>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <span className="w-fit rounded-full bg-sky-soft px-2.5 py-1 font-sans text-[0.65rem] font-semibold uppercase tracking-wide text-sky">
          {book.category}
        </span>

        <button type="button" onClick={() => onSelect(book)} className="text-left">
          <h3 className="font-serif text-lg font-semibold leading-snug text-navy transition-colors group-hover:text-gold">
            {book.title}
          </h3>
        </button>
        <p className="font-sans text-xs uppercase tracking-[0.15em] text-ink-soft">
          {book.author}
        </p>

        <div className="mt-auto flex items-center justify-between pt-2">
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-lg font-semibold text-navy">
              {formatPrice(book.price, book.currency)}
            </span>
            {hasDiscount && (
              <span className="font-sans text-xs text-ink-soft line-through">
                {formatPrice(book.originalPrice, book.currency)}
              </span>
            )}
          </div>
          <span
            className={`rounded-full px-2.5 py-1 font-sans text-[0.65rem] font-semibold ${
              book.status === "in-stock"
                ? "bg-emerald-100 text-emerald-700"
                : book.status === "pre-order"
                  ? "bg-gold-soft/60 text-navy"
                  : "bg-red-100 text-red-600"
            }`}
          >
            {STATUS_LABEL[book.status]}
          </span>
        </div>

        <a
          href={getBookWhatsAppLink(book)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(event) => event.stopPropagation()}
          className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-navy/15 px-4 py-2.5 font-sans text-xs font-semibold text-navy transition-colors hover:bg-navy hover:text-ivory"
        >
          <MessageCircle className="h-3.5 w-3.5" aria-hidden />
          Buy via WhatsApp
        </a>
      </div>
    </motion.article>
  );
}
