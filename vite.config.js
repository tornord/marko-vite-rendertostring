import { defineConfig } from 'vite';
import marko from '@marko/vite';

export default defineConfig({
  plugins: [marko()],
  build: {
    outDir: 'dist',
  },
});
