"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import BookCard from "@/components/BookCard";
import BookDetails from "@/components/BookDetails";

export default function BookCollection({ books, categories }) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedBook, setSelectedBook] = useState(null);

  const filteredBooks = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return books.filter((book) => {
      const matchesCategory = activeCategory === "All" || book.category === activeCategory;
      const matchesQuery =
        !normalizedQuery ||
        book.title.toLowerCase().includes(normalizedQuery) ||
        book.author.toLowerCase().includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });
  }, [books, query, activeCategory]);

  const isSparse = filteredBooks.length <= 2;

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search
            className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft"
            aria-hidden
          />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by title or author"
            aria-label="Search books"
            className="w-full rounded-full border border-beige bg-ivory py-3 pl-11 pr-4 font-sans text-sm text-ink placeholder:text-ink-soft/70 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {["All", ...categories].map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-2 font-sans text-xs font-semibold uppercase tracking-wide transition-colors ${
                activeCategory === category
                  ? "bg-navy text-ivory"
                  : "bg-beige/40 text-navy hover:bg-beige/70"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {filteredBooks.length === 0 ? (
        <div className="flex flex-col items-center gap-2 rounded-2xl border border-dashed border-beige py-20 text-center">
          <p className="font-serif text-xl text-navy">No books match your search</p>
          <p className="font-sans text-sm text-ink-soft">
            Try a different title, author, or category.
          </p>
        </div>
      ) : (
        <div
          className={
            isSparse
              ? "mx-auto flex max-w-5xl flex-wrap justify-center gap-8"
              : "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          }
        >
          {filteredBooks.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              onSelect={setSelectedBook}
              className={isSparse ? "w-full max-w-sm" : undefined}
            />
          ))}
        </div>
      )}

      <BookDetails book={selectedBook} onClose={() => setSelectedBook(null)} />
    </div>
  );
}
