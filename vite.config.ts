import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'inline',
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,svg}'],
        skipWaiting: true,
        clientsClaim: true,
        //cleanupOutdatedCaches: false,
        //sourcemap: true,
      },
      includeAssets: ['favicon.ico', 'logo.png', 'assets/img/icons/*'],
      manifest: {
        "id": "radio-golmon",
        "name": "Radio Golmon",
        "short_name": "Radio Golmon",
        "description": "écoute le golmon en toi",
        "theme_color": "#f0d2b9",
        "background_color": "#9370db",
        "start_url": "https://radio-golmon.fr",
        "dir": "ltr",
        "lang": "fr",
        "display": "standalone",
        "display_override": [
          "window-controls-overlay",
          "standalone",
          "browser"
        ],
        "edge_side_panel": {
            "preferred_width": 400
        },
        "orientation": "portrait",
        "launch_handler": {
          "client_mode": "navigate-existing"
        },
        "categories": [
            "entertainment",
            "music"
        ],
        "scope_extensions": [
          {"origin": "*.radio-golmon.fr"},
          {"origin": "discord.com"}
        ],      
        "icons": [
            {
                "src": "assets/icons/pwa-512x512.png",
                "sizes": "512x512",
                "type": "image/png"
            },
            {
                "src": "assets/icons/pwa-192x192.png",
                "sizes": "192x192",
                "type": "image/png"
            },
            {
                "src": "assets/icons/pwa-512x512.png",
                "sizes": "512x512",
                "purpose": "maskable",
                "type": "image/png"
            },
            {
                "src": "assets/icons/pwa-512x512.png",
                "sizes": "512x512",
                "purpose": "any",
                "type": "image/png"
            },
            {
                "src": "assets/icons/pwa-192x192.png",
                "sizes": "192x192",
                "purpose": "maskable",
                "type": "image/png"
            },
            {
                "src": "assets/icons/pwa-192x192.png",
                "sizes": "192x192",
                "purpose": "any",
                "type": "image/png"
            },
            {
                "src": "assets/icons/apple-touch-icon.png",
                "sizes": "180x180",
                "type": "image/png"
            },
            {
                "src": "assets/icons/apple-touch-icon.png",
                "sizes": "180x180",
                "purpose": "any",
                "type": "image/png"
            },
            {
                "src": "assets/icons/apple-touch-icon.png",
                "sizes": "180x180",
                "purpose": "maskable",
                "type": "image/png"
            }
        ]
      }
    })
  ],
});
