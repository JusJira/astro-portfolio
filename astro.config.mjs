import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import preact from "@astrojs/preact";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  site: "https://imjustin.dev",
  integrations: [mdx(), sitemap(), preact()],

  vite: {
    plugins: [tailwindcss()],
  },
});
