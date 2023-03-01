import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import paths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [sveltekit(), paths()],
});
