export const BUSINESS_TYPE_LABELS: Record<string, string> = {
  automaker: "Automaker",
  exporter: "Exporter",
  dealer: "Dealer",
  supplier: "Supplier",
  inspection: "Inspection agency",
  logistics: "Logistics company",
  shipping: "Shipping company",
  other: "Other",
};

// Phase 2 verification tiers (four levels, replacing the previous five words).
export const VERIFICATION_LABELS: Record<string, string> = {
  verified: "Verified",
  publicly_listed: "Publicly listed",
  "source-backed": "Source-backed",
  unverified: "Unverified",
};

export const VERIFICATION_BADGE_CLASS: Record<string, string> = {
  verified: "v-verified",
  publicly_listed: "v-listed",
  "source-backed": "v-source",
  unverified: "v-unverified",
};

// Human-readable explanations for the homepage legend.
export const VERIFICATION_DESCRIPTIONS: Record<string, string> = {
  verified: "Independently verified with documented evidence. No records qualify yet.",
  publicly_listed: "A public company with a verifiable stock listing and official website.",
  "source-backed": "Facts are backed by an official source (e.g. the company's own website).",
  unverified: "Demo or placeholder data — not yet verified against any source.",
};

export const VERIFICATION_ORDER = [
  "verified",
  "publicly_listed",
  "source-backed",
  "unverified",
];

export const VEHICLE_TYPE_LABELS: Record<string, string> = {
  suv: "SUV",
  sedan: "Sedan",
  mpv: "MPV",
  pickup: "Pickup",
  hatchback: "Hatchback",
};

export function businessTypeLabel(type: string): string {
  return BUSINESS_TYPE_LABELS[type] ?? type;
}

export function verificationLabel(status: string): string {
  return VERIFICATION_LABELS[status] ?? status;
}

// Demo / unverified records are retained in the dataset for development but
// must not appear in the public directory. Use this predicate to filter them
// out of every public list and search surface.
export function isDemo(company: { verification_status: string }): boolean {
  return company.verification_status === "unverified";
}

export function verificationBadgeClass(status: string): string {
  return VERIFICATION_BADGE_CLASS[status] ?? "v-unverified";
}

export function vehicleTypeLabel(type: string): string {
  return VEHICLE_TYPE_LABELS[type] ?? type;
}
