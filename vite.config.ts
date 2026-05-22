import { defineConfig } from "vite";
import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

// Plain SPA build (Cloudflare Workers static-asset hosting):
//  - File-based routes via @tanstack/router-plugin → generates src/routeTree.gen.ts
//  - Path alias "@/" resolved via tsconfig (vite-tsconfig-paths) + explicit fallback
//  - No TanStack Start / SSR — entry is index.html → src/main.tsx
export default defineConfig({
  plugins: [
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
      routesDirectory: "src/routes",
      generatedRouteTree: "src/routeTree.gen.ts",
    }),
    react(),
    tsconfigPaths(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    target: "es2022",
  },
  server: {
    host: "0.0.0.0",
    port: 5173,
    strictPort: false,
  },
});
