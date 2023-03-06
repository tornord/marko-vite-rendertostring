import { configDefaults, defineConfig } from 'vitest/config';
import marko from '@marko/vite';

export default defineConfig({
  plugins: [
    marko(),
    {
      name: 'setup',
      config: () => ({
        test: {
          setupFiles: ['./setupVitest.js'],
        },
      }),
    },
  ],
  test: {
    include: ['test/**/*.js'],
    exclude: [...configDefaults.exclude],
    globals: true,
    transformMode: { ssr: [/\.([cm]?[jt]sx?|json|marko)$/] },
    testTimeout: 60000,
    reporters: ['basic'],
  },
});
