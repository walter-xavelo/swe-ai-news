import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://walter-xavelo.github.io',
  base: '/swe-ai-news/',
  integrations: [mdx()],

  typescript: {
    strict: true,
  },

  vite: {
    plugins: [tailwindcss()],
  },
});