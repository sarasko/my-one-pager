import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// `base` matters for GitHub Pages project sites (served from /<repo>/).
// Set VITE_BASE at build time, e.g. VITE_BASE=/my-repo/ npm run build.
// For Netlify / Vercel / custom domain / Docker, leave it as '/'.
export default defineConfig({
  base: process.env.VITE_BASE ?? '/',
  plugins: [vue(), tailwindcss()],
  // host:true binds 0.0.0.0 so the dev-container port forward can reach it.
  server: { host: true, port: 5173 },
})
