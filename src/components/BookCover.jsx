import Image from "next/image";
import { BookOpen } from "lucide-react";

const ACCENTS = {
  navy: "from-navy via-navy-soft to-navy-light",
  gold: "from-gold-light via-gold to-[#8a6a2d]",
  charcoal: "from-[#2b2824] via-ink to-[#0f0d0b]",
};

// Displays a real cover image when provided, otherwise renders a tasteful,
// branded placeholder built from the book's title/author so the layout
// never looks unfinished. Replace `coverImage` in src/data/books.js once you
// have real cover art.
export default function BookCover({ book, priority = false, className = "" }) {
  if (book.coverImage) {
    return (
      <div
        className={`relative aspect-[2/3] w-full overflow-hidden rounded-xl shadow-2xl shadow-navy/20 ring-1 ring-black/5 ${className}`}
      >
        <Image
          src={book.coverImage}
          alt={`Cover of ${book.title} by ${book.author}`}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 420px, (min-width: 640px) 60vw, 80vw"
          className="object-cover"
        />
      </div>
    );
  }

  const accent = ACCENTS[book.coverAccent] ?? ACCENTS.navy;

  return (
    <div
      className={`relative aspect-[2/3] w-full overflow-hidden rounded-xl bg-gradient-to-br shadow-2xl shadow-navy/20 ring-1 ring-black/10 ${accent} ${className}`}
      role="img"
      aria-label={`Cover of ${book.title} by ${book.author}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_55%)]" />
      <div className="absolute inset-y-0 left-0 w-2 bg-black/20" />
      <div className="absolute inset-3 rounded-lg border border-gold-light/30" />

      <div className="relative flex h-full flex-col items-center justify-between p-6 text-center sm:p-8">
        <BookOpen className="mt-2 h-8 w-8 text-gold-light/80" strokeWidth={1.5} />

        <div className="flex flex-col gap-3">
          <span className="font-serif text-2xl font-semibold leading-snug text-ivory sm:text-3xl">
            {book.title}
          </span>
          <span className="mx-auto h-px w-10 bg-gold-light/60" />
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-gold-soft/90 sm:text-sm">
            {book.author}
          </span>
        </div>

        <span className="font-serif text-xs tracking-[0.3em] text-ivory/40">
          HEAVEN OF KNOWLEDGE
        </span>
      </div>
    </div>
  );
}
