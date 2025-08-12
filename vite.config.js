import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'Cut Tracker',
        short_name: 'CutTracker',
        description: 'Body comp & cut tracking PWA',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        background_color: '#0f1115',
        theme_color: '#0f1115',
        icons: [
          { src: '/public/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/public/icon-512.png', sizes: '512x512', type: 'image/png' }
        ]
      }
    })
  ]
})
