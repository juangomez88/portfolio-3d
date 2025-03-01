import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import tailwindcss from "@tailwindcss/vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  assetsInclude: ["**/*.glb"],
  resolve: {
    // Add an alias for the 'three' package
    alias: {
      three: "three",
    },
  },
  optimizeDeps: {
    // Include 'three' in the dependencies to be optimized
    include: ["three"],
  },
})

