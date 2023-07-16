import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import svgLoader from 'vite-svg-loader';
import viteExtend from 'vite-plugin-vue-setup-extend';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svgLoader(),
    viteExtend(),
    vue({
      template: {
        transformAssetUrls: {
          base: '/src',
          includeAbsolute: false,
        },
      },
    }),
  ],
  resolve: {
    alias: {
      '~': resolve(__dirname, '/src'),
    },
  },
});
