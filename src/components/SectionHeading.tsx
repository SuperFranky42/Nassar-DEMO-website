type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  text?: string;
};

export function SectionHeading({ eyebrow, title, text }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="text-xs font-medium tracking-[0.18em] text-brass uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-serif text-3xl text-balance text-ink sm:text-4xl ${eyebrow ? "mt-2" : ""}`}
      >
        {title}
      </h2>
      {text ? <p className="mt-3 text-pretty text-muted">{text}</p> : null}
    </div>
  );
}
