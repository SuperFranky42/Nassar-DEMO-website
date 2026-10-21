import { Link } from "react-router-dom";
import { usePageTitle } from "../components/usePageTitle.ts";
import { btnPrimaryLarge, container } from "../lib/styles.ts";

export function NotFound() {
  usePageTitle("Page not found · Nassar Renovation");

  return (
    <div className="pattern-dots text-white">
      <div className={`${container} py-28`}>
        <p className="text-sm font-bold tracking-[0.16em] text-brass uppercase">404</p>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
          That page is not in <span className="text-brass">this demo.</span>
        </h1>
        <Link to="/" className={`${btnPrimaryLarge} mt-8`}>
          Back home
        </Link>
      </div>
    </div>
  );
}
