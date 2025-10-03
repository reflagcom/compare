import { cloudflare } from "@cloudflare/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import viteTsConfigPaths from "vite-tsconfig-paths";

const site = process.env.SITE || "auth";

const config = defineConfig({
	define: {
		// Pass SITE environment variable to the client
		"import.meta.env.VITE_SITE": JSON.stringify(site),
	},
	plugins: [
		// this is the plugin that enables path aliases
		viteTsConfigPaths({
			projects: ["./tsconfig.json"],
		}),
		tanstackStart(),
		viteReact(),
		cloudflare({ configPath: `./wrangler.${site}.json` }),
		tailwindcss(),
	],
});

export default config;
