// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

import sitemap from "@astrojs/sitemap";



// https://astro.build/config
export default defineConfig({
  site: "https://astro-portfolio.mchroud.workers.dev",
  integrations: [sitemap()],
  adapter: cloudflare()
});
