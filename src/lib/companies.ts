export const BUSINESS_TYPE_LABELS: Record<string, string> = {
  exporter: "Exporter",
  dealer: "Dealer",
  supplier: "Supplier",
  inspection: "Inspection agency",
  other: "Other",
};

export const VERIFICATION_LABELS: Record<string, string> = {
  listed: "Listed",
  information_provided: "Information provided",
  source_verified: "Source verified",
  official_website_found: "Official website found",
  registration_information_available: "Registration info available",
};

export const VERIFICATION_BADGE_CLASS: Record<string, string> = {
  listed: "v-listed",
  information_provided: "v-info",
  source_verified: "v-source",
  official_website_found: "v-website",
  registration_information_available: "v-registration",
};

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

export function verificationBadgeClass(status: string): string {
  return VERIFICATION_BADGE_CLASS[status] ?? "v-listed";
}

export function vehicleTypeLabel(type: string): string {
  return VEHICLE_TYPE_LABELS[type] ?? type;
}
