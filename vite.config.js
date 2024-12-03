import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'docs',
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules') !== -1) {
            const module = id.split('node_modules/').pop().split('/')[0];
            return `vendor_${module}`;
          }
        },
      },
    },
  }
})
