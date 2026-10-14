import type { Review } from "../data/reviews.ts";

export function ReviewCard({ review }: { review: Review }) {
  const stars = "★★★★★".slice(0, review.rating) + "☆☆☆☆☆".slice(review.rating);

  return (
    <article className="flex h-full flex-col rounded-2xl border border-line bg-paper p-6">
      <p className="tracking-wider text-brass" aria-label={`${review.rating} out of 5 stars`}>
        {stars}
      </p>
      <blockquote className="mt-4 font-serif text-xl leading-snug text-ink">
        “{review.quote}”
      </blockquote>
      <footer className="mt-6 text-sm">
        <p className="font-medium">{review.name}</p>
        <p className="text-muted">
          {review.project} · {review.neighborhood}
        </p>
      </footer>
    </article>
  );
}
