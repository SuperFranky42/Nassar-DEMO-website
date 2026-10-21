import { steps } from "../../data/site.ts";
import { container, sectionLight } from "../../lib/styles.ts";
import { revealDelay } from "../../lib/motion.ts";
import { Reveal } from "../Reveal.tsx";
import { SectionHeading } from "../SectionHeading.tsx";

export function ProcessSteps() {
  return (
    <section className={sectionLight}>
      <div className={container}>
        <Reveal>
          <SectionHeading
            center
            title="Plan, Design,"
            accent="Build, Deliver"
            text="Every project follows the same four steps, with one project lead from the first visit to the final walkthrough."
          />
        </Reveal>
        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title}>
              <Reveal delay={revealDelay(index)} className="h-full">
                <div className="h-full rounded-2xl border border-line p-6">
                  <p className="text-5xl font-extrabold text-brass-deep">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 text-xl font-extrabold">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted">{step.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
