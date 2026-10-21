import { useState, type FormEvent, type ReactNode } from "react";
import { budgetOptions, serviceAreas, timelineOptions } from "../data/site.ts";
import { projectTypeOptions } from "../data/services.ts";
import { btnPrimary, btnSecondary } from "../lib/styles.ts";

type FormState = {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  area: string;
  budget: string;
  timeline: string;
  message: string;
};

type QuoteFormProps = {
  initialProjectType?: string;
  compact?: boolean;
};

const emptyForm: FormState = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
  area: "",
  budget: "",
  timeline: "",
  message: "",
};

const fieldClass =
  "mt-2 w-full rounded-md border border-line bg-white px-3 py-2.5 text-ink outline-none ring-brass focus:border-brass focus:ring-2";

function startingType(initialProjectType?: string) {
  if (initialProjectType && projectTypeOptions.includes(initialProjectType)) {
    return initialProjectType;
  }
  return "";
}

function validate(form: FormState, compact: boolean) {
  const errors: Partial<Record<keyof FormState, string>> = {};
  if (form.name.trim().length < 2) errors.name = "Add your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = "Add an email address.";
  }
  if (form.phone.replace(/\D/g, "").length < 7) {
    errors.phone = "Add a phone number.";
  }
  if (!form.projectType) errors.projectType = "Choose a project type.";
  if (!form.area) errors.area = "Choose an area.";
  if (!compact && !form.budget) errors.budget = "Choose a rough budget.";
  if (!compact && !form.timeline) errors.timeline = "Choose a timeline.";
  if (form.message.trim().length < 12) {
    errors.message = "Add a sentence about the project.";
  }
  return errors;
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-1 text-sm text-red-700" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function QuoteForm({ initialProjectType, compact = false }: QuoteFormProps) {
  const [form, setForm] = useState<FormState>({
    ...emptyForm,
    projectType: startingType(initialProjectType),
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [receipt, setReceipt] = useState<{ name: string; projectType: string } | null>(
    null,
  );

  function update(key: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(form, compact);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setReceipt({ name: form.name.trim(), projectType: form.projectType });
  }

  if (receipt) {
    const firstName = receipt.name.split(" ")[0];
    return (
      <div role="status" className="rounded-2xl bg-white p-8 text-ink shadow-xl shadow-black/10 sm:p-10">
        <p className="text-xs font-bold tracking-[0.16em] text-brass-deep uppercase">Request received</p>
        <h2 className="mt-3 text-3xl font-extrabold text-ink">
          Thank you, {firstName}. We will be in touch.
        </h2>
        <p className="mt-4 text-muted">
          Your note about {receipt.projectType.toLowerCase()} is with the team. We
          will follow up to set a visit and a written quote.
        </p>
        <p className="mt-4 text-sm text-muted">Demo only: no email is sent.</p>
        <button
          type="button"
          className={`${btnSecondary} mt-6`}
          onClick={() => {
            setReceipt(null);
            setForm({ ...emptyForm, projectType: startingType(initialProjectType) });
            setErrors({});
          }}
        >
          Send another note
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl border border-line bg-white p-6 text-ink shadow-xl shadow-black/10 sm:p-8"
    >
      <h2 className="text-2xl font-extrabold text-ink">
        {compact ? "Request a free quote" : "Project details"}
      </h2>
      <p className="mt-2 text-sm text-muted">All fields are required.</p>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Name" error={errors.name}>
          <input
            id="name"
            name="name"
            autoComplete="name"
            value={form.name}
            onChange={(event) => update("name", event.target.value)}
            className={fieldClass}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            placeholder="Jordan Lee"
          />
        </Field>
        <Field id="email" label="Email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(event) => update("email", event.target.value)}
            className={fieldClass}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            placeholder="you@email.com"
          />
        </Field>
        <Field id="phone" label="Phone" error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(event) => update("phone", event.target.value)}
            className={fieldClass}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            placeholder="(555) 010-0000"
          />
        </Field>
        <Field id="projectType" label="Project type" error={errors.projectType}>
          <select
            id="projectType"
            name="projectType"
            value={form.projectType}
            onChange={(event) => update("projectType", event.target.value)}
            className={fieldClass}
            aria-invalid={Boolean(errors.projectType)}
            aria-describedby={errors.projectType ? "projectType-error" : undefined}
          >
            <option value="">Choose a project type</option>
            {projectTypeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
        {compact ? null : (
          <Field id="budget" label="Rough budget" error={errors.budget}>
            <select
              id="budget"
              name="budget"
              value={form.budget}
              onChange={(event) => update("budget", event.target.value)}
              className={fieldClass}
              aria-invalid={Boolean(errors.budget)}
              aria-describedby={errors.budget ? "budget-error" : undefined}
            >
              <option value="">Choose a range</option>
              {budgetOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </Field>
        )}
        <div className={compact ? "sm:col-span-2" : ""}>
          <Field id="area" label="Area" error={errors.area}>
            <select
              id="area"
              name="area"
              value={form.area}
              onChange={(event) => update("area", event.target.value)}
              className={fieldClass}
              aria-invalid={Boolean(errors.area)}
              aria-describedby={errors.area ? "area-error" : undefined}
            >
              <option value="">Choose an area</option>
              {serviceAreas.map((area) => (
                <option key={area.name} value={area.name}>
                  {area.name}
                </option>
              ))}
              <option value="Somewhere else">Somewhere else</option>
            </select>
          </Field>
        </div>
        {compact ? null : (
          <Field id="timeline" label="Timeline" error={errors.timeline}>
            <select
              id="timeline"
              name="timeline"
              value={form.timeline}
              onChange={(event) => update("timeline", event.target.value)}
              className={fieldClass}
              aria-invalid={Boolean(errors.timeline)}
              aria-describedby={errors.timeline ? "timeline-error" : undefined}
            >
              <option value="">Choose a timeline</option>
              {timelineOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </Field>
        )}
        <div className="sm:col-span-2">
          <Field id="message" label="About the project" error={errors.message}>
            <textarea
              id="message"
              name="message"
              rows={compact ? 3 : 5}
              value={form.message}
              onChange={(event) => update("message", event.target.value)}
              className={fieldClass}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
              placeholder="The kitchen is original, and we want to stay in the house while the work is underway."
            />
          </Field>
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button type="submit" className={`${btnPrimary} py-3 text-base sm:min-w-56`}>
          {compact ? "Request Free Quote" : "Send the request"}
        </button>
        <p className="text-sm text-muted">Demo only: no email is sent.</p>
      </div>
    </form>
  );
}
