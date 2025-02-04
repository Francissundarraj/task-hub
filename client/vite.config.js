import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Optional: Specify the port for the development server
    open: true, // Optional: Automatically open the app in the browser
  },
  build: {
    outDir: 'dist', // Optional: Specify the output directory for the build
  },
  
})
