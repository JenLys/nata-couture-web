import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Vite's project config file — this is what `npm run dev` and
// `npm run build` both read. https://vite.dev/config/
export default defineConfig({
  // Adds React support: JSX compilation, Fast Refresh (instant updates
  // in the browser as you save files during `npm run dev`), etc.
  plugins: [react()],

  // `base` is prepended to every asset URL Vite generates (JS bundles,
  // CSS, and — via import.meta.env.BASE_URL, used throughout src/ —
  // your images too). Locally with the default "/" this is invisible,
  // but GitHub Pages serves your site from a SUBFOLDER matching your
  // repo name (yourname.github.io/repo-name/), not the domain root —
  // so every asset URL needs that prefix or it 404s once deployed.
  //
  // IMPORTANT for GitHub Pages: this must be "/<your-repo-name>/"
  // (with leading and trailing slashes), e.g. "/my-business-site/".
  // Using the wrong value here is the #1 cause of a blank white page
  // and broken image/CSS paths after deploying. See README.md.
  base: "/",
});
