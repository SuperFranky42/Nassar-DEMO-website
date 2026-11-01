import { Stars } from "../components/Icon.tsx";
import { PageHero } from "../components/PageHero.tsx";
import { QuoteBand } from "../components/QuoteBand.tsx";
import { ReviewCard } from "../components/ReviewCard.tsx";
import { usePageTitle } from "../components/usePageTitle.ts";
import { Reveal } from "../components/Reveal.tsx";
import { revealDelay } from "../lib/motion.ts";
import { reviewAverage, reviews, reviewThemes } from "../data/reviews.ts";
import { container } from "../lib/styles.ts";

export function Reviews() {
  usePageTitle("Reviews · Nassar Renovation");
  const average = reviewAverage();

  return (
    <>
      <PageHero
        title="What homeowners say after"
        accent="the dust settles."
        text="Sample notes from finished projects. The same themes return: one person to call, a quote that holds, and a house you can live in."
      />
      <section className="pattern-dots py-14 text-white">
        <div className={container}>
          <Reveal>
            <p className="flex flex-wrap items-center gap-3">
              <span className="text-3xl font-extrabold">{average.toFixed(1)}</span>
              <Stars count={Math.round(average)} className="h-5 w-5" />
              <span className="text-sm text-white/70">from {reviews.length} sample reviews</span>
            </p>
          </Reveal>
          <ul className="mt-8 grid gap-5 lg:grid-cols-3">
            {reviewThemes.map((theme, index) => (
              <li key={theme.title}>
                <Reveal
                  delay={revealDelay(index)}
                  className="h-full rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <h2 className="text-xl font-extrabold text-brass">{theme.title}</h2>
                  <p className="mt-3 text-sm text-white/70">{theme.text}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <div className={`${container} py-16`}>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <li key={review.id}>
              <Reveal delay={revealDelay(index)} className="h-full">
                <ReviewCard review={review} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
      <QuoteBand
        title="Want the same kind of update?"
        text="Tell us about the room. You will have one project lead from the first call."
      />
    </>
  );
}
