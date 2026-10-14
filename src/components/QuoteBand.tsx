import { Link } from "react-router-dom";
import { btnPrimary, container } from "../lib/styles.ts";

export function QuoteBand({ title, text }: { title: string; text: string }) {
  return (
    <section className="border-t border-line bg-cream">
      <div
        className={`${container} flex flex-col items-start gap-5 py-12 sm:flex-row sm:items-center sm:justify-between`}
      >
        <div>
          <h2 className="font-serif text-3xl text-ink">{title}</h2>
          <p className="mt-2 max-w-xl text-muted">{text}</p>
        </div>
        <Link to="/quote" className={btnPrimary}>
          Get a quote
        </Link>
      </div>
    </section>
  );
}
