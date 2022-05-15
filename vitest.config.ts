/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  test: {
    coverage: {
      reporter: ['json', 'html'],
    },
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./test/setup-test-env.ts'],
  },
});
