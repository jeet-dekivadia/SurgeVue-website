import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: true, // Opens the browser automatically when the server starts
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Global SCSS file, if needed
        additionalData: `@import "@/styles/global.scss";`,
      },
    },
  },
  // Uncomment to add PWA support
  /*
  pwa: {
    manifest: {
      name: 'SurgeVue',
      short_name: 'SurgeVue',
      start_url: '/',
      display: 'standalone',
      theme_color: '#3498db',
      icons: [
        {
          src: 'icons/pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'icons/pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
  },
  */
})
