import Reveal from "@/components/ui/Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
}) {
  const alignment = align === "center" ? "mx-auto text-center items-center" : "text-left items-start";
  const isDark = tone === "dark";

  return (
    <Reveal className={`flex flex-col gap-4 ${alignment}`}>
      {eyebrow ? (
        <span
          className={`font-sans text-xs font-semibold uppercase tracking-[0.25em] ${
            isDark ? "text-gold-light" : "text-gold"
          }`}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={`max-w-2xl font-serif text-3xl font-semibold leading-tight sm:text-4xl ${
          isDark ? "text-ivory" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`max-w-xl text-base leading-relaxed sm:text-lg ${
            isDark ? "text-ivory/70" : "text-ink-soft"
          }`}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
