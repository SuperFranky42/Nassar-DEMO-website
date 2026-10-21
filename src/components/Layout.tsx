import { Outlet } from "react-router-dom";
import { CallNowButton } from "./CallNowButton.tsx";
import { Footer } from "./Footer.tsx";
import { Header } from "./Header.tsx";

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="absolute top-0 left-4 z-50 -translate-y-full rounded-md bg-brass px-3 py-2 text-sm font-bold text-ink focus:translate-y-4"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1} className="flex-1 outline-none">
        <Outlet />
      </main>
      <Footer />
      <CallNowButton />
    </div>
  );
}
