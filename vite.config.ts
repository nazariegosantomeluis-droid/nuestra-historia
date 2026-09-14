import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Base path for GitHub Pages project sites (https://<user>.github.io/<repo>/).
// Override at build time if needed: `VITE_BASE=/mi-repo/ npm run build`.
const base = process.env.VITE_BASE ?? "/";

export default defineConfig({
  base,
  plugins: [react()],
});
