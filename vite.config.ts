import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  base: '/',  // Keep as '/' for Netlify root deployment
  build: {
    outDir: 'dist',
    // REMOVE all rollupOptions - they're causing issues
    // ADD this emptyDir to clean dist folder
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})