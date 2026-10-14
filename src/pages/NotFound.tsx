import { Link } from "react-router-dom";
import { usePageTitle } from "../components/usePageTitle.ts";
import { container, textLink } from "../lib/styles.ts";

export function NotFound() {
  usePageTitle("Page not found · Nassar Renovation");

  return (
    <div className={`${container} py-24`}>
      <h1 className="font-serif text-4xl text-ink">That page is not in this demo.</h1>
      <Link to="/" className={`${textLink} mt-6 inline-block`}>
        Back home
      </Link>
    </div>
  );
}
