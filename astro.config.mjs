import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
	site: "https://priyanshusinha.in",
	integrations: [tailwind(), sitemap(), mdx(), compress()],
	markdown: {
		shikiConfig: {
			theme: "css-variables",
		},
	},
});
