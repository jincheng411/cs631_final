import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Keep the base path for your application
  server: {
    host: true, // Expose the dev server to external devices (e.g., Docker containers)
    port: 5173, // Ensure the frontend runs on the expected port
  },
  build: {
    outDir: 'dist', // Output build files to "dist" folder
    assetsDir: 'assets', // Place static assets in the "assets" folder
    emptyOutDir: true, // Ensure the output directory is cleared before rebuilding
  },
  resolve: {
    alias: {
      '@': '/src', // Create a shortcut to the "src" directory for easier imports
    },
  },
});
