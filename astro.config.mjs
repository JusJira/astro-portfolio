import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://imjustin.dev",
  integrations: [mdx(), sitemap(), tailwind(), preact()],
  redirects: {
    "/cu-future-classroom":
      "https://docs.google.com/forms/d/e/1FAIpQLSfcFRh0Qn5FMI7ScVR6PaI-hd91bRZ8BdfvitXUMoBOsR68WQ/viewform?usp=sf_link",
  },
});
