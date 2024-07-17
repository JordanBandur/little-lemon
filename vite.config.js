import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3006,
    open: false,
  },
  publicDir: 'public',
  build: {
    outDir: 'build',
  },
});
