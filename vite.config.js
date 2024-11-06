import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    ViteImageOptimizer({
      png: {
        quality: 86,
      },
      jpeg: {
        quality: 86,
      },
      jpg: {
        quality: 86,
      },
    }),
    {
      ...imagemin(['./src/img/**/*.{jpg,png,jpeg}'], {
        destination: './src/img/webp/',
        plugins: [imageminWebp({ quality: 86 })],
      }),
      apply: 'serve',
    },
  ],
  resolve: {
    alias: {
      assets: '/src/assets',
      components: '/src/components',
      pages: '/src/pages',
    },
  },
});
