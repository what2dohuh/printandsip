import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },server: {
    host: '0.0.0.0', // Bind to all network interfaces
    port: process.env.PORT || 5173, // Use PORT from environment or fallback to 5173
  },
});
