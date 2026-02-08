import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Custom domains at the root level need '/'
  base: "/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    // Ensures the module scripts are strictly formatted
    modulePreload: {
      polyfill: true,
    },
  },
});
