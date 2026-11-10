// Centralized book catalog.
//
// To add a new book, append another object to this array — no other file
// needs to change. Every section of the site (featured book, collection
// grid, search, filters) reads from this list.
//
// Fields:
//   id              unique slug, used as the React key and for filtering
//   title           book title
//   author          author name
//   coverImage      path in /public, e.g. "/books/my-book.jpg" — leave null
//                    to use the built-in designed placeholder cover
//   coverAccent     "navy" | "gold" | "charcoal" — accent used by the
//                    placeholder cover when coverImage is null
//   description     short back-cover style summary
//   highlights       array of short selling points
//   price           current price (number)
//   originalPrice   optional, set to show a strikethrough discount
//   currency        ISO currency code, default "USD"
//   category        shelf / genre label, used for filtering
//   status          "in-stock" | "out-of-stock" | "pre-order"
//   featured        true to surface it in the Featured Book section
//   details         { pages, language, format }

export const books = [
  {
    id: "wo-shaqs-jo-allah-se-dur-tha",
    title: "Wo Shaqs Jo Allah Se Dur Tha",
    author: "Muhammad Hasan Rizwan",
    coverImage: "/books/wo-shaqs-jo-allah-se-dur-tha.png",
    coverAccent: "navy",
    // TODO: replace with the real back-cover description for this book.
    description:
      "A thoughtfully written book for readers seeking to draw closer to Allah. Replace this description with the real summary in src/data/books.js.",
    highlights: [
      "Clear, practical insights in every chapter",
      "Designed for readers at any stage of their journey",
      "A keepsake edition built to be read again",
    ],
    price: 1700,
    originalPrice: null,
    currency: "PKR",
    // TODO: confirm/adjust category.
    category: "Islamic Literature",
    status: "in-stock",
    featured: true,
    details: {
      pages: 248,
      language: "Urdu",
      format: "Paperback",
    },
  },
];

export function getFeaturedBook() {
  return books.find((book) => book.featured) ?? books[0];
}

export function getCategories() {
  return Array.from(new Set(books.map((book) => book.category))).sort();
}
