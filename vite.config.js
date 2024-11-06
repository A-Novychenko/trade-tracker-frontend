import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import path from 'path';
import glob from 'fast-glob';
import { fileURLToPath } from 'url';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
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
  build: {
    minify: false, // disable minification
    rollupOptions: {
      input: Object.fromEntries(
        glob
          .sync(['./*.html', './pages/**/*.html'])
          .map(file => [
            path.relative(
              __dirname,
              file.slice(0, file.length - path.extname(file).length)
            ),
            fileURLToPath(new URL(file, import.meta.url)),
          ])
      ),
      // output unminified CSS file
      output: {
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },
});
