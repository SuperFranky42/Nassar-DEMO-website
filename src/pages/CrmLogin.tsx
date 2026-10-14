import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { usePageTitle } from "../components/usePageTitle.ts";
import { demoStaff, signIn } from "../crm/auth.ts";
import { site } from "../data/site.ts";
import { btnPrimary, btnSecondary } from "../lib/styles.ts";

const fieldClass =
  "mt-2 w-full rounded-xl border border-line bg-paper px-3 py-2.5 text-ink outline-none ring-brass focus:ring-2";

type CrmLoginProps = {
  onSignedIn: () => void;
};

export function CrmLogin({ onSignedIn }: CrmLoginProps) {
  usePageTitle("Staff sign-in · Nassar Renovation");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (signIn(email, password)) {
      onSignedIn();
      return;
    }
    setError("That account is not recognized.");
  }

  return (
    <div className="grid min-h-screen place-items-center bg-canvas px-5 py-12 text-ink">
      <div className="w-full max-w-md">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-ink font-serif text-lg text-cream">
            N
          </span>
          <div>
            <p className="font-serif text-lg leading-none">{site.name}</p>
            <p className="text-xs text-muted">Staff sign-in</p>
          </div>
        </div>

        <h1 className="mt-8 font-serif text-4xl">Team view</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          This board is for authenticated personnel. Customers use the public site
          without an account.
        </p>

        <form className="mt-8" onSubmit={onSubmit} noValidate>
          <div>
            <label htmlFor="staff-email" className="text-sm font-medium">
              Email
            </label>
            <input
              id="staff-email"
              name="email"
              type="email"
              autoComplete="username"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                setError("");
              }}
              className={fieldClass}
              aria-invalid={error ? true : undefined}
              aria-describedby={error ? "staff-error" : undefined}
            />
          </div>
          <div className="mt-4">
            <label htmlFor="staff-password" className="text-sm font-medium">
              Password
            </label>
            <input
              id="staff-password"
              name="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
                setError("");
              }}
              className={fieldClass}
              aria-invalid={error ? true : undefined}
              aria-describedby={error ? "staff-error" : undefined}
            />
          </div>
          {error ? (
            <p id="staff-error" className="mt-3 text-sm text-brass-deep" role="alert">
              {error}
            </p>
          ) : null}
          <button type="submit" className={`${btnPrimary} mt-6 w-full`}>
            Sign in
          </button>
        </form>

        <p className="mt-6 rounded-2xl border border-line bg-cream/60 px-4 py-3 text-sm text-muted">
          Demo staff account
          <span className="mt-1 block text-ink">{demoStaff.email}</span>
          <span className="block text-ink">{demoStaff.password}</span>
        </p>

        <Link to="/" className={`${btnSecondary} mt-6`}>
          Back to site
        </Link>
      </div>
    </div>
  );
}
