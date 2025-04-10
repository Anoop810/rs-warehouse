import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // or whatever framework you're using

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      "681b-2405-201-c-387d-928-b0f8-997-d653.ngrok-free.app"
    ]
  }
})