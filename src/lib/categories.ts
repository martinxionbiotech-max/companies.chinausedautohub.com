import companiesData from "../../shared/data/companies.json";

export interface Company {
  company_id: string;
  name: string;
  business_type: string;
  province: string | null;
  city: string | null;
  established: number | null;
  business_scope: string | null;
  export_markets: string[];
  main_brands: string[];
  vehicle_types: string[];
  export_presence: string | null;
  inspection_capability: string | null;
  warehouse: string | null;
  website: string | null;
  email: string | null;
  phone: string | null;
  whatsapp: string | null;
  verification_status: string;
  verification_evidence: string | null;
  source: string | null;
  source_url: string | null;
  confidence: string | null;
  last_checked: string | null;
  status: string;
}

export const companies = companiesData.companies as Company[];

export interface CategoryConfig {
  slug: string;
  h1: string;
  title: string;
  description: string;
  /** Business type to filter by, or null for special (non-list) pages like ports. */
  businessType: string | null;
  /** One-line description of the company type, shown on empty-state pages. */
  emptyDescription: string;
  /** Banner shown when a category only contains demo (unverified) records. */
  demoBanner?: string;
}

export const CATEGORIES: CategoryConfig[] = [
  {
    slug: "automakers",
    h1: "Automakers",
    title: "Automakers — China Used Car Companies",
    description:
      "Chinese vehicle manufacturers — automakers headquartered in China with official websites and export-market information. Source-backed and publicly listed entities only.",
    businessType: "automaker",
    emptyDescription: "Vehicle manufacturers headquartered in China.",
  },
  {
    slug: "used-car-exporters",
    h1: "Used Car Exporters",
    title: "Used Car Exporters — China Used Car Companies",
    description:
      "Companies that export used vehicles from China to overseas markets. Currently showing demo records; verified exporters will be added.",
    businessType: "exporter",
    emptyDescription:
      "Companies that export used vehicles from China to overseas markets.",
    demoBanner: "Demo records shown — verified exporters will be added",
  },
  {
    slug: "dealers",
    h1: "Dealers",
    title: "Dealers — China Used Car Companies",
    description: "Dealers that trade used vehicles for export buyers.",
    businessType: "dealer",
    emptyDescription: "Dealers that trade used vehicles for export buyers.",
    demoBanner: "Demo records shown — verified dealers will be added",
  },
  {
    slug: "inspection-companies",
    h1: "Inspection Companies",
    title: "Inspection Companies — China Used Car Companies",
    description:
      "Companies providing pre-shipment inspection for used vehicle exports.",
    businessType: "inspection",
    emptyDescription:
      "Companies providing pre-shipment inspection for used vehicle exports.",
    demoBanner:
      "Demo records shown — verified inspection companies will be added",
  },
  {
    slug: "logistics-companies",
    h1: "Logistics Companies",
    title: "Logistics Companies — China Used Car Companies",
    description:
      "Logistics providers handling vehicle transport and customs brokerage for used-car exports.",
    businessType: "logistics",
    emptyDescription:
      "Logistics providers handling vehicle transport and customs brokerage for used-car exports.",
  },
  {
    slug: "shipping-companies",
    h1: "Shipping Companies",
    title: "Shipping Companies — China Used Car Companies",
    description:
      "Shipping lines and freight forwarders for used-vehicle exports from China.",
    businessType: "shipping",
    emptyDescription:
      "Shipping lines and freight forwarders for used-vehicle exports from China.",
  },
  {
    slug: "suppliers",
    h1: "Suppliers",
    title: "Suppliers — China Used Car Companies",
    description:
      "Suppliers of vehicles, parts and related services for the used-car export market.",
    businessType: "supplier",
    emptyDescription:
      "Suppliers of vehicles, parts and related services for the used-car export market.",
  },
  {
    slug: "ports",
    h1: "Ports",
    title: "Ports — China Used Car Companies",
    description:
      "Port information for used-car exports lives on the Market site.",
    businessType: null,
    emptyDescription: "",
  },
];

export function getCategory(slug: string): CategoryConfig | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function isDemo(company: Company): boolean {
  return company.verification_status === "unverified";
}
