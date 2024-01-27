import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'http://192.168.177.134:3000',
  mode: 'development',
  plugins: [
    vue(),
    AutoImport({
      dirs: ['./src/stores/modules'],
      resolvers: [ElementPlusResolver()],
      imports: ['vue', 'vue-router', 'pinia'],
    }),
    Components({
      // dirs: ['src/components'], // 按需加载的文件夹
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
