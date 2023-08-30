import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from '@astrojs/sitemap';
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap(), tailwind()],
  output: "server",
  adapter: vercel(),
  server: (command) => ({ port: command === 'dev' ? 3000 : 4000, host: true })
});