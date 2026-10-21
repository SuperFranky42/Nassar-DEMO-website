import { usePageTitle } from "../components/usePageTitle.ts";
import { Hero } from "../components/home/Hero.tsx";
import { HomeQuote } from "../components/home/HomeQuote.tsx";
import { NeedsWork } from "../components/home/NeedsWork.tsx";
import { ProcessSteps } from "../components/home/ProcessSteps.tsx";
import { RecentProjects } from "../components/home/RecentProjects.tsx";
import { ReviewsSection } from "../components/home/ReviewsSection.tsx";
import { ServiceAreas } from "../components/home/ServiceAreas.tsx";
import { ServiceGrid } from "../components/home/ServiceGrid.tsx";
import { TrustSplit } from "../components/home/TrustSplit.tsx";

export function Home() {
  usePageTitle("Nassar Renovation");

  return (
    <>
      <Hero />
      <TrustSplit />
      <RecentProjects />
      <ServiceGrid />
      <ReviewsSection />
      <NeedsWork />
      <ProcessSteps />
      <ServiceAreas />
      <HomeQuote />
    </>
  );
}
