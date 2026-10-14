import { PageHero } from "../components/PageHero.tsx";
import { QuoteBand } from "../components/QuoteBand.tsx";
import { ReviewCard } from "../components/ReviewCard.tsx";
import { usePageTitle } from "../components/usePageTitle.ts";
import { reviews, reviewThemes } from "../data/reviews.ts";
import { container } from "../lib/styles.ts";

export function Reviews() {
  usePageTitle("Reviews · Nassar Renovation");
  const average = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="What homeowners say after the dust settles."
        text="Sample notes from finished projects. The same themes return: one person to call, a quote that holds, and a house you can live in."
      />
      <div className={container}>
        <p className="text-sm text-muted">
          {average.toFixed(1)} average from {reviews.length} sample reviews
        </p>
        <ul className="mt-8 grid gap-5 lg:grid-cols-3">
          {reviewThemes.map((theme) => (
            <li key={theme.title} className="rounded-2xl bg-cream p-6">
              <h2 className="font-serif text-2xl text-ink">{theme.title}</h2>
              <p className="mt-3 text-sm text-muted">{theme.text}</p>
            </li>
          ))}
        </ul>
        <ul className="mt-10 grid gap-5 pb-16 sm:grid-cols-2">
          {reviews.map((review) => (
            <li key={review.id}>
              <ReviewCard review={review} />
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
