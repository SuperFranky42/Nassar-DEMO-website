import { Link } from "react-router-dom";
import { site } from "../data/site.ts";
import { btnGhostDark, btnPrimaryLarge, container, sectionDark } from "../lib/styles.ts";
import { Icon } from "./Icon.tsx";
import { Reveal } from "./Reveal.tsx";

export function QuoteBand({ title, text }: { title: string; text: string }) {
  return (
    <section className={sectionDark}>
      <Reveal>
        <div
          className={`${container} flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between`}
        >
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
            <p className="mt-3 max-w-xl text-lg text-white/70">{text}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/quote" className={btnPrimaryLarge}>
              Get a Free Quote
            </Link>
            <a href={site.phoneHref} className={btnGhostDark}>
              <Icon name="phone" className="h-5 w-5" />
              Call Us
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
