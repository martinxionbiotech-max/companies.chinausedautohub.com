// Company intelligence helpers (P3.6): derive vehicle→model relationships and
// electrification relevance from shared brand/model data. Read-only over
// shared/data/*.json (owned by DATA); never fabricates.

import modelsData from "../../shared/data/models.json";
import brandsData from "../../shared/data/brands.json";

export interface ModelRef {
  model_id: string;
  name: string;
  name_zh: string;
  body_type: string;
}

export function modelsForBrands(brandIds: string[]): ModelRef[] {
  return modelsData.models
    .filter((m) => brandIds.includes(m.brand_id))
    .map((m) => ({
      model_id: m.model_id,
      name: m.name,
      name_zh: m.name_zh,
      body_type: m.body_type,
    }));
}

const POWERTRAIN_WORDS: Record<string, string> = {
  ev: "battery-electric",
  phev: "plug-in hybrid",
  hev: "hybrid",
  ice: "internal-combustion",
};

export function brandPowertrains(brandId: string): string[] {
  const b = brandsData.brands.find((x) => x.brand_id === brandId);
  return b?.powertrains ?? [];
}

// Evidence-backed electrification statement from the brand's powertrain list.
// Returns null when the brand has no electrified powertrain on record.
export function evRelevance(brandIds: string[]): string | null {
  const all = new Set<string>();
  for (const id of brandIds) {
    for (const p of brandPowertrains(id)) all.add(p);
  }
  const ev = all.has("ev");
  const phev = all.has("phev");
  const hev = all.has("hev");
  if (!ev && !phev && !hev) return null;
  const parts: string[] = [];
  if (ev) parts.push("battery-electric vehicles");
  if (phev) parts.push("plug-in hybrids");
  if (hev) parts.push("hybrids");
  return `Produces ${parts.join(", ")}.`;
}

// Ownership derived only from evidence on record: verification_status
// (publicly_listed) or an explicit "state-owned" note in business_scope.
export function deriveOwnership(
  verificationStatus: string,
  businessScope: string | null
): string {
  const scope = (businessScope ?? "").toLowerCase();
  const stateOwned = scope.includes("state-owned");
  const listed = verificationStatus === "publicly_listed";
  if (stateOwned && listed) return "State-owned; publicly listed";
  if (stateOwned) return "State-owned";
  if (listed) return "Publicly listed company";
  return "Not available";
}
