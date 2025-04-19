// @ts-check
import { defineConfig } from "astro/config";
import markdoc from "@astrojs/markdoc";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://trieve.ai",
  devToolbar: {
    enabled: false,
  },
  image: {
    domains: ["127.0.0.1"],
  },
  integrations: [markdoc(), sitemap(), icon(), mdx()],
  vite: {
    resolve: {
      alias: {
        "@": "/src",
      },
    },
    plugins: [tailwindcss()],
  },
});
