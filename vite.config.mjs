import { defineConfig } from 'vite';
import packageJson from './package.json' with { type: 'json' };

export default defineConfig({
  base: process.env.PUBLIC_URL || new URL(packageJson.homepage).pathname,
  oxc: {
    jsx: {
      runtime: 'classic',
    },
  },
  build: {
    outDir: 'build',
  },
  test: {
    environment: 'jsdom',
  },
});
