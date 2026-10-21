import { Link } from "react-router-dom";
import { reviewAverage, reviews } from "../../data/reviews.ts";
import { btnPrimary, btnSecondary, container, sectionLight } from "../../lib/styles.ts";
import { Icon, Stars } from "../Icon.tsx";
import { revealDelay } from "../../lib/motion.ts";
import { Reveal } from "../Reveal.tsx";
import { ReviewCard } from "../ReviewCard.tsx";
import { SectionHeading } from "../SectionHeading.tsx";

export function ReviewsSection() {
  const average = reviewAverage();

  return (
    <section className={sectionLight}>
      <div className={container}>
        <Reveal>
          <div className="flex justify-center">
            <Stars className="h-6 w-6" count={Math.round(average)} />
          </div>
          <div className="mt-4">
            <SectionHeading
              center
              title="What Our"
              accent="Customers Say"
              text="Homeowners talk about the same things: one person to call, a quote that holds, and a house they could live in."
            />
          </div>
        </Reveal>
        <Reveal delay={revealDelay(1)} className="mt-12">
          <div className="flex flex-col items-start justify-between gap-4 rounded-2xl bg-paper px-6 py-5 sm:flex-row sm:items-center">
            <p className="flex flex-wrap items-center gap-3">
              <span className="text-2xl font-extrabold">{average.toFixed(1)}</span>
              <Stars count={Math.round(average)} className="h-5 w-5" />
              <span className="text-sm text-muted">{reviews.length} homeowner reviews</span>
            </p>
            <Link to="/quote" className={btnPrimary}>
              Start your project
            </Link>
          </div>
        </Reveal>
        <ul className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.slice(0, 6).map((review, index) => (
            <li key={review.id}>
              <Reveal delay={revealDelay(index)} className="h-full">
                <ReviewCard review={review} />
              </Reveal>
            </li>
          ))}
        </ul>
        <Reveal>
          <div className="mt-10 text-center">
            <Link to="/reviews" className={btnSecondary}>
              Read All Reviews
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
