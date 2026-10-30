import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// base relatif : le site fonctionne aussi bien sur le domaine racine
// que sur l'URL de repli https://aziguy.github.io/react-portfolio/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  base: './',
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    sourcemap: false,
    rolldownOptions: {
      output: isSsrBuild
        ? {}
        : {
            codeSplitting: {
              groups: [
                { name: 'react', test: /node_modules[\\/](react|react-dom|scheduler)[\\/]/ },
                { name: 'swiper', test: /node_modules[\\/]swiper[\\/]/ },
              ],
            },
          },
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./tests/setup.js'],
    include: ['src/**/*.test.{js,jsx}'],
    css: true,
    coverage: {
      provider: 'v8',
      reportsDirectory: './coverage',
      include: ['src/**/*.{js,jsx}'],
      exclude: ['src/**/*.test.{js,jsx}', 'src/main.jsx', 'src/entry-server.jsx'],
    },
  },
}));
