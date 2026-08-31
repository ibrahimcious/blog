import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://blog.ibrahimaji.workers.dev",
	trailingSlash: "never",
	vite: {
		plugins: [tailwindcss()],
	},
	integrations: [mdx()],
	output: "server",
	adapter: cloudflare({
		wasmModuleImports: true,
	}),
});
