import type { Review } from "../data/reviews.ts";
import { Stars } from "./Icon.tsx";

export function ReviewCard({ review }: { review: Review }) {
  const initials = review.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <article className="flex h-full flex-col rounded-2xl bg-paper p-6">
      <header className="flex items-center gap-3">
        <span
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-ink text-sm font-bold text-brass"
          aria-hidden="true"
        >
          {initials}
        </span>
        <div>
          <p className="font-bold text-ink">{review.name}</p>
          <p className="text-xs text-muted">
            {review.project} · {review.neighborhood}
          </p>
        </div>
      </header>
      <div className="mt-4">
        <Stars count={review.rating} />
      </div>
      <blockquote className="mt-3 text-ink/85">“{review.quote}”</blockquote>
    </article>
  );
}
