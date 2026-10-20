import { useEffect, useRef, useState, type DragEvent } from "react";
import { Link } from "react-router-dom";
import { usePageTitle } from "../components/usePageTitle.ts";
import { leadStatuses, type Lead, type LeadStatus } from "../data/leads.ts";
import { site } from "../data/site.ts";
import { isSignedIn, signOut } from "../crm/auth.ts";
import { loadLeads, resetLeads, writeLeads } from "../crm/storage.ts";
import { formatWhen } from "../lib/format.ts";
import { btnSecondary } from "../lib/styles.ts";
import { CrmLogin } from "./CrmLogin.tsx";

export function Crm() {
  const [signedIn, setSignedIn] = useState(() => isSignedIn());

  if (!signedIn) {
    return <CrmLogin onSignedIn={() => setSignedIn(true)} />;
  }

  return (
    <CrmBoard
      onSignOut={() => {
        signOut();
        setSignedIn(false);
      }}
    />
  );
}

function CrmBoard({ onSignOut }: { onSignOut: () => void }) {
  usePageTitle("Team view · Nassar Renovation");
  const [leads, setLeads] = useState<Lead[]>(() => loadLeads());
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [overStatus, setOverStatus] = useState<LeadStatus | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const selected = leads.find((lead) => lead.id === selectedId) ?? null;

  useEffect(() => {
    if (!selectedId) return;
    closeRef.current?.focus();
  }, [selectedId]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setSelectedId(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function moveLead(id: string, status: LeadStatus) {
    setLeads((current) => {
      const next = current.map((lead) => (lead.id === id ? { ...lead, status } : lead));
      writeLeads(next);
      return next;
    });
  }

  function onDrop(event: DragEvent<HTMLElement>, status: LeadStatus) {
    event.preventDefault();
    const id = event.dataTransfer.getData("text/plain");
    setOverStatus(null);
    if (id) moveLead(id, status);
  }

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <header className="border-b border-line bg-paper">
        <div className="flex flex-wrap items-center justify-between gap-4 px-5 py-4">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-ink font-serif text-lg text-cream">
              N
            </span>
            <div>
              <p className="font-serif text-lg leading-none">{site.name}</p>
              <p className="text-xs text-muted">Team view · demo CRM</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              className={btnSecondary}
              onClick={() => {
                setLeads(resetLeads());
                setSelectedId(null);
              }}
            >
              Reset demo leads
            </button>
            <button type="button" className={btnSecondary} onClick={onSignOut}>
              Sign out
            </button>
            <Link to="/" className={btnSecondary}>
              Back to site
            </Link>
          </div>
        </div>
        <p className="px-5 pb-4 text-sm text-muted">
          Leads on this screen stay in this browser. Submit the quote form on this
          device and the new lead appears under New.
        </p>
      </header>

      <div className="px-5 py-6">
        <ul className="flex gap-6 overflow-x-auto pb-2">
          {leadStatuses.map((status) => {
            const count = leads.filter((lead) => lead.status === status.id).length;
            return (
              <li key={status.id} className="min-w-28">
                <p className="font-serif text-3xl">{count}</p>
                <p className="text-xs tracking-[0.14em] text-muted uppercase">{status.label}</p>
              </li>
            );
          })}
        </ul>

        <div className="mt-6 flex gap-4 overflow-x-auto pb-8">
          {leadStatuses.map((status) => {
            const columnLeads = leads.filter((lead) => lead.status === status.id);
            const activeDrop = overStatus === status.id;
            return (
              <section
                key={status.id}
                aria-label={status.label}
                className={`w-72 shrink-0 rounded-2xl border bg-cream/60 p-3 ${
                  activeDrop ? "border-brass" : "border-line"
                }`}
                onDragOver={(event) => {
                  event.preventDefault();
                  setOverStatus(status.id);
                }}
                onDrop={(event) => onDrop(event, status.id)}
              >
                <header className="flex items-center justify-between px-1 pb-3">
                  <h2 className="text-sm font-medium">{status.label}</h2>
                  <span className="text-xs text-muted">{columnLeads.length}</span>
                </header>
                <ul className="flex min-h-48 flex-col gap-3">
                  {columnLeads.length === 0 ? (
                    <li className="rounded-xl border border-dashed border-line px-3 py-6 text-center text-sm text-muted">
                      No leads
                    </li>
                  ) : (
                    columnLeads.map((lead) => (
                      <li key={lead.id}>
                        <div
                          role="button"
                          tabIndex={0}
                          draggable
                          onDragStart={(event) => {
                            event.dataTransfer.setData("text/plain", lead.id);
                            event.dataTransfer.effectAllowed = "move";
                          }}
                          onDragEnd={() => setOverStatus(null)}
                          onClick={() => setSelectedId(lead.id)}
                          onKeyDown={(event) => {
                            if (event.key === "Enter" || event.key === " ") {
                              event.preventDefault();
                              setSelectedId(lead.id);
                            }
                          }}
                          className={`cursor-grab rounded-xl border bg-paper p-3 text-left shadow-sm active:cursor-grabbing ${
                            selectedId === lead.id ? "border-brass" : "border-line"
                          }`}
                        >
                          <p className="font-medium">{lead.name}</p>
                          <p className="mt-1 text-sm text-muted">{lead.projectType}</p>
                          <p className="mt-3 text-xs text-muted">{lead.budget}</p>
                          <p className="mt-1 text-xs text-muted">{formatWhen(lead.createdAt)}</p>
                          {lead.source === "quote" ? (
                            <p className="mt-3 inline-block rounded-full bg-cream px-2 py-0.5 text-xs text-brass-deep">
                              Quote form
                            </p>
                          ) : null}
                        </div>
                      </li>
                    ))
                  )}
                </ul>
              </section>
            );
          })}
        </div>
      </div>

      {selected ? (
        <div
          className="fixed inset-0 z-50 flex justify-end bg-ink/40"
          onClick={() => setSelectedId(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="lead-title"
            className="h-full w-full max-w-md overflow-y-auto bg-paper p-6 shadow-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs tracking-[0.14em] text-brass uppercase">
                  {selected.source === "quote" ? "From the quote form" : "Sample lead"}
                </p>
                <h2 id="lead-title" className="mt-2 font-serif text-3xl">
                  {selected.name}
                </h2>
              </div>
              <button
                ref={closeRef}
                type="button"
                className="text-sm font-medium"
                onClick={() => setSelectedId(null)}
              >
                Close
              </button>
            </div>
            <p className="mt-6 text-sm font-medium">Move to</p>
            <div className="mt-2 flex flex-wrap gap-2" role="group" aria-label="Lead status">
              {leadStatuses.map((status) => {
                const current = selected.status === status.id;
                return (
                  <button
                    key={status.id}
                    type="button"
                    aria-pressed={current}
                    onClick={() => moveLead(selected.id, status.id)}
                    className={`rounded-full px-3 py-1.5 text-sm ${
                      current ? "bg-ink text-paper" : "border border-line bg-canvas"
                    }`}
                  >
                    {status.label}
                  </button>
                );
              })}
            </div>
            <dl className="mt-8 space-y-4 text-sm">
              {[
                ["Project", selected.projectType],
                ["Area", selected.area || "Not recorded"],
                ["Budget", selected.budget],
                ["Timeline", selected.timeline],
                ["Received", formatWhen(selected.createdAt)],
              ].map(([label, value]) => (
                <div key={label} className="border-t border-line pt-3">
                  <dt className="text-xs tracking-[0.14em] text-muted uppercase">{label}</dt>
                  <dd className="mt-1">{value}</dd>
                </div>
              ))}
              <div className="border-t border-line pt-3">
                <dt className="text-xs tracking-[0.14em] text-muted uppercase">Phone</dt>
                <dd className="mt-1">
                  <a href={`tel:${selected.phone}`} className="underline underline-offset-4">
                    {selected.phone}
                  </a>
                </dd>
              </div>
              <div className="border-t border-line pt-3">
                <dt className="text-xs tracking-[0.14em] text-muted uppercase">Email</dt>
                <dd className="mt-1">
                  <a href={`mailto:${selected.email}`} className="underline underline-offset-4">
                    {selected.email}
                  </a>
                </dd>
              </div>
              <div className="border-t border-line pt-3">
                <dt className="text-xs tracking-[0.14em] text-muted uppercase">Note</dt>
                <dd className="mt-2 leading-relaxed">{selected.message}</dd>
              </div>
            </dl>
          </div>
        </div>
      ) : null}
    </div>
  );
}
