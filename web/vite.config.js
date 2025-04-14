import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // or whatever framework you're using

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      "9fd3-2405-201-c-387d-7ca5-367c-e62e-d0b.ngrok-free.app"
    ]
  }
})