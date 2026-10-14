import {
  leadStatuses,
  seedLeads,
  type Lead,
  type LeadInput,
} from "../data/leads.ts";

const STORAGE_KEY = "nassar-demo-leads";

const statusIds = new Set<string>(leadStatuses.map((status) => status.id));

function cloneLeads(leads: Lead[]) {
  return leads.map((lead) => ({ ...lead }));
}

function isLead(value: unknown): value is Lead {
  if (!value || typeof value !== "object") return false;
  const lead = value as Partial<Lead>;
  return (
    typeof lead.id === "string" &&
    typeof lead.name === "string" &&
    typeof lead.email === "string" &&
    typeof lead.phone === "string" &&
    typeof lead.projectType === "string" &&
    typeof lead.budget === "string" &&
    typeof lead.timeline === "string" &&
    typeof lead.message === "string" &&
    typeof lead.status === "string" &&
    statusIds.has(lead.status) &&
    typeof lead.createdAt === "string" &&
    (lead.source === "sample" || lead.source === "quote")
  );
}

export function writeLeads(leads: Lead[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(leads));
}

export function loadLeads(): Lead[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      const seeded = cloneLeads(seedLeads);
      writeLeads(seeded);
      return seeded;
    }
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      const seeded = cloneLeads(seedLeads);
      writeLeads(seeded);
      return seeded;
    }
    const leads = parsed.filter(isLead);
    if (leads.length === 0) {
      const seeded = cloneLeads(seedLeads);
      writeLeads(seeded);
      return seeded;
    }
    return leads;
  } catch {
    return cloneLeads(seedLeads);
  }
}

export function addLead(input: LeadInput) {
  const lead: Lead = {
    ...input,
    id: crypto.randomUUID(),
    status: "new",
    createdAt: new Date().toISOString(),
    source: "quote",
  };
  writeLeads([lead, ...loadLeads()]);
  return lead;
}

export function resetLeads() {
  const fresh = cloneLeads(seedLeads);
  writeLeads(fresh);
  return fresh;
}
