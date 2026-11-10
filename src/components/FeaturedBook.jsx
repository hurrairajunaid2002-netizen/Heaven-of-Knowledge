import { CheckCircle2, MessageCircle, Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import BookCover from "@/components/BookCover";
import { getFeaturedBook } from "@/data/books";
import { formatPrice, getBookWhatsAppLink } from "@/lib/whatsapp";

const STATUS_LABEL = {
  "in-stock": "In Stock",
  "out-of-stock": "Out of Stock",
  "pre-order": "Pre-Order",
};

export default function FeaturedBook() {
  const book = getFeaturedBook();
  const whatsappLink = getBookWhatsAppLink(book);
  const hasDiscount = book.originalPrice && book.originalPrice > book.price;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-paper via-paper to-sky-soft/40 py-24 sm:py-28">
      <div
        className="pointer-events-none absolute -top-20 right-[-10%] -z-0 h-96 w-96 rounded-full bg-terracotta/10 blur-3xl"
        aria-hidden
      />
      <Container className="relative">
        <Reveal className="mb-12 flex items-center justify-center gap-2 text-center">
          <Sparkles className="h-4 w-4 text-gold" aria-hidden />
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Featured Book
          </span>
        </Reveal>

        <div className="grid items-center gap-12 rounded-3xl border border-beige bg-ivory p-8 shadow-xl shadow-navy/10 sm:p-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal direction="right">
            <div className="relative mx-auto max-w-xs lg:max-w-sm">
              <div className="absolute -inset-5 -z-10 rounded-[1.75rem] bg-gradient-to-br from-gold-soft/70 via-sky-soft/50 to-terracotta-soft/40 blur-xl" />
              <BookCover book={book} />
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.1} className="flex flex-col items-start gap-6">
            <span className="rounded-full bg-sky-soft px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-wide text-sky">
              {book.category}
            </span>

            <h3 className="font-serif text-3xl font-semibold leading-tight text-navy sm:text-4xl">
              {book.title}
            </h3>
            <p className="font-sans text-sm uppercase tracking-[0.2em] text-ink-soft">
              by {book.author}
            </p>

            <p className="text-base leading-relaxed text-ink-soft sm:text-lg">
              {book.description}
            </p>

            <ul className="flex flex-col gap-3">
              {book.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3 text-sm text-ink sm:text-base">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden />
                  {highlight}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-3xl font-semibold text-navy">
                  {formatPrice(book.price, book.currency)}
                </span>
                {hasDiscount && (
                  <span className="font-sans text-base text-ink-soft line-through">
                    {formatPrice(book.originalPrice, book.currency)}
                  </span>
                )}
              </div>
              <span
                className={`rounded-full px-3 py-1 font-sans text-xs font-semibold ${
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
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-navy to-navy-soft px-7 py-3.5 font-sans text-sm font-semibold text-ivory shadow-lg shadow-navy/20 transition-transform hover:scale-[1.02] sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              Buy via WhatsApp
            </a>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
