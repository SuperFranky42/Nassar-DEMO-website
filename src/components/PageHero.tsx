type PageHeroProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  wideTitle?: boolean;
};

export function PageHero({ eyebrow, title, text, wideTitle = false }: PageHeroProps) {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 pt-14 pb-6 sm:pt-20">
      {eyebrow ? (
        <p className="text-xs font-medium tracking-[0.18em] text-brass uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h1
        className={`${eyebrow ? "mt-3" : ""} font-serif text-4xl leading-tight text-balance text-ink sm:text-6xl ${wideTitle ? "max-w-none" : "max-w-3xl"}`}
      >
        {title}
      </h1>
      {text ? (
        <p className="mt-5 max-w-2xl text-lg text-pretty text-muted">{text}</p>
      ) : null}
    </div>
  );
}
