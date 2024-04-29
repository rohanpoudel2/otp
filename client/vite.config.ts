import { defineConfig, loadEnv } from 'vite'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.API_ENDPOINT': JSON.stringify(env.API_ENDPOINT)
    },
    base: "/",
    preview: {
      port: 8081,
      strictPort: true,
    },
    plugins: [react(), TanStackRouterVite()],
    server: {
      port: 8081,
      strictPort: true,
      host: true,
      origin: "http://0.0.0.0:8081",
    },
  }
})