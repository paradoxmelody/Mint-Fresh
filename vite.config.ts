import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      },
      output: {
        manualChunks: undefined, // Prevents chunk splitting issues
      }
    },
    cssCodeSplit: false,
    assetsDir: 'assets',
    chunkSizeWarningLimit: 2000, // Increases limit for large CSS files
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
})