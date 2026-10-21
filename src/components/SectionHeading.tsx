type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  accent?: string;
  text?: string;
  dark?: boolean;
  center?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  accent,
  text,
  dark = false,
  center = false,
}: SectionHeadingProps) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <p
          className={`text-xs font-bold tracking-[0.18em] uppercase ${dark ? "text-brass" : "text-brass-deep"}`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-4xl leading-[1.08] font-extrabold tracking-tight text-balance sm:text-5xl ${dark ? "text-white" : "text-ink"} ${eyebrow ? "mt-3" : ""}`}
      >
        {title}
        {accent ? (
          <>
            {" "}
            <span className={dark ? "text-brass" : "text-brass-deep"}>{accent}</span>
          </>
        ) : null}
      </h2>
      {text ? (
        <p className={`mt-4 text-lg text-pretty ${dark ? "text-white/70" : "text-muted"}`}>
          {text}
        </p>
      ) : null}
    </div>
  );
}
