import type { ReactNode } from "react";
import banner from "../../assets/home_page_banner.jpg";
import { container } from "../lib/styles.ts";
import { Reveal } from "./Reveal.tsx";

type PageHeroProps = {
  eyebrow?: string;
  title: ReactNode;
  accent?: string;
  text?: string;
  image?: string;
  wideTitle?: boolean;
};

export function PageHero({
  eyebrow,
  title,
  accent,
  text,
  image = banner,
  wideTitle = false,
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      <img src={image} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/90 via-black/75 to-black/45" />
      <div className={`${container} py-20 sm:py-24`}>
        <Reveal>
          {eyebrow ? (
            <p className="inline-flex rounded-full border border-brass/40 bg-brass/15 px-3 py-1 text-xs font-bold tracking-[0.16em] text-brass uppercase">
              {eyebrow}
            </p>
          ) : null}
          <h1
            className={`${eyebrow ? "mt-5" : ""} text-4xl leading-[1.05] font-extrabold tracking-tight text-balance sm:text-6xl ${wideTitle ? "max-w-5xl" : "max-w-3xl"}`}
          >
            {title}
            {accent ? (
              <>
                {" "}
                <span className="text-brass">{accent}</span>
              </>
            ) : null}
          </h1>
          {text ? <p className="mt-5 max-w-2xl text-lg text-pretty text-white/80">{text}</p> : null}
        </Reveal>
      </div>
    </section>
  );
}
