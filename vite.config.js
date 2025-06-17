import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  server: {
    port: 5000,
    host: "0.0.0.0",
    allowedHosts: ["localhost", ".replit.dev", ".replit.app"],
    hmr: {
      port: 5000,
      host: "0.0.0.0",
    },
    watch: {
      usePolling: true,
    },
  },
});