import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";

import cloudflare from "@astrojs/cloudflare";

let adapter = cloudflare({
  mode: "advance",
  imageService: 'passthrough',
  routes: {
    strategy: "include",
    include: ["/blog/*", "/_image"], // handled by custom function: functions/users/[id].js
  },
});
let output = "hybrid";
if (process.argv[3] === "--node" || process.argv[4] === "--node") {
  adapter = node({ mode: "standalone" });
  output = "server";
}
// https://astro.build/config
export default defineConfig({
  site: "https://imjustin.dev",
  integrations: [mdx(), sitemap(), tailwind(), preact()],
  output: output,
  adapter: adapter,
});
