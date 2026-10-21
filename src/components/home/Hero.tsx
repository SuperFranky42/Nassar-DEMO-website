import { Link } from "react-router-dom";
import banner from "../../../assets/home_page_banner.jpg";
import { reviewAverage, reviews } from "../../data/reviews.ts";
import { site } from "../../data/site.ts";
import { btnGhostDark, btnPrimaryLarge, container } from "../../lib/styles.ts";
import { Icon, Stars } from "../Icon.tsx";

export function Hero() {
  const average = reviewAverage();

  return (
    <section className="relative isolate flex min-h-[600px] items-center overflow-hidden bg-ink lg:h-[88vh]">
      <img
        src={banner}
        alt="Cedar pergola and new concrete patio built by Nassar"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/90 via-black/65 to-black/20" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-black/60 to-transparent" />

      <div className={`${container} py-20`}>
        <p className="inline-flex items-center gap-2 rounded-full border border-brass/40 bg-brass/15 px-3 py-1 text-xs font-bold tracking-[0.14em] text-brass uppercase sm:text-sm">
          <Icon name="check" className="h-4 w-4" />
          Licensed in Oklahoma · Since {site.established}
        </p>
        <h1 className="mt-6 max-w-3xl text-5xl leading-[1.02] font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
          Building Your Vision
          <span className="block text-brass">Into Reality.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-pretty text-white/85">
          Kitchens, baths, additions, and full builds across Oklahoma. One project lead,
          a written scope, and a crew that leaves the site clean.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Link to="/quote" className={btnPrimaryLarge}>
            Get a Free Quote
          </Link>
          <a href={site.phoneHref} className={btnGhostDark}>
            <Icon name="phone" className="h-5 w-5" />
            Call {site.phoneDisplay}
          </a>
        </div>
        <div className="mt-10 flex items-center gap-3 text-sm text-white/80">
          <Stars count={Math.round(average)} />
          <span>
            {average.toFixed(1)} average from {reviews.length} homeowner reviews
          </span>
        </div>
      </div>
    </section>
  );
}
