import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5111,
    strictPort: true,
    open: false,
    // Add this for tunnel support
    cors: true,
    hmr: {
      clientPort: 5111,   // needed when behind ngrok/tunnel
    },
  },
})