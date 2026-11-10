import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import BookCollection from "@/components/BookCollection";
import { books, getCategories } from "@/data/books";

export default function Books() {
  const categories = getCategories();

  return (
    <section id="books" className="relative overflow-hidden bg-ivory py-24 sm:py-28">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-0 h-80 w-[36rem] -translate-x-1/2 rounded-full bg-gold-soft/30 blur-3xl"
        aria-hidden
      />
      <Container className="relative flex flex-col gap-14">
        <SectionHeading
          eyebrow="The Collection"
          title="Discover Your Next Great Read"
          description="Every book in our shelf is chosen with care. Browse the collection below — it grows as we add more titles."
        />
        <BookCollection books={books} categories={categories} />
      </Container>
    </section>
  );
}
