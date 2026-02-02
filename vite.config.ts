import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// [https://vite.dev/config/](https://vite.dev/config/)[page:0]
export default defineConfig({
  base: './',
  plugins: [react()], // Rimosso inspectAttr() di Kimi
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
