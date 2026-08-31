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
	// The site does not use Astro.session. Use an in-memory driver so deploys
	// need no KV namespace. If sessions are ever used, switch to the adapter's
	// default Cloudflare KV binding and provision a "SESSION" namespace.
	session: {
		driver: { entrypoint: "unstorage/drivers/memory" },
	},
	adapter: cloudflare({
		wasmModuleImports: true,
	}),
});
