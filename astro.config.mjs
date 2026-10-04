import { defineConfig } from 'astro/config';
import { readFileSync } from 'node:fs';
import sitemap from '@astrojs/sitemap';

const site = process.env.COMPANIES_SITE_URL || 'https://company.chinausedautohub.com';

// Demo / unverified company records must never appear in the sitemap. Build a
// set of unverified company ids so the sitemap excludes their detail pages.
// (The pages themselves are also noindexed; this keeps the sitemap consistent.)
const companiesJson = JSON.parse(
  readFileSync(new URL('./shared/data/companies.json', import.meta.url), 'utf-8'),
);
const demoCompanyIds = new Set(
  (Array.isArray(companiesJson.companies) ? companiesJson.companies : [])
    .filter((c) => c.verification_status === 'unverified')
    .map((c) => c.company_id),
);
const isDemoCompanyPage = (page) => {
  for (const id of demoCompanyIds) {
    if (page.includes(`/companies/${id}/`)) return true;
  }
  return false;
};

export default defineConfig({
  site,
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && !isDemoCompanyPage(page),
    }),
  ],
  vite: { server: { fs: { allow: ['/home/openclaw/carexport'] } } },
});
