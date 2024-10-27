import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'script',
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,svg}'],
        skipWaiting: true,
        clientsClaim: true,
        //cleanupOutdatedCaches: false,
        //sourcemap: true,
      },
      includeAssets: ['favicon.ico', 'logo.png'],
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
              "src": "assets/icons/android/android-launchericon-512-512.png",
              "sizes": "512x512",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/android/android-launchericon-192-192.png",
              "sizes": "192x192",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/android/android-launchericon-144-144.png",
              "sizes": "144x144",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/android/android-launchericon-96-96.png",
              "sizes": "96x96",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/android/android-launchericon-72-72.png",
              "sizes": "72x72",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/android/android-launchericon-48-48.png",
              "sizes": "48x48",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/ios/16.png",
              "sizes": "16x16",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/ios/20.png",
              "sizes": "20x20",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/ios/29.png",
              "sizes": "29x29",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/ios/32.png",
              "sizes": "32x32",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/ios/40.png",
              "sizes": "40x40",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/ios/50.png",
              "sizes": "50x50",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/ios/57.png",
              "sizes": "57x57",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/ios/58.png",
              "sizes": "58x58",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/ios/60.png",
              "sizes": "60x60",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/ios/64.png",
              "sizes": "64x64",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/ios/72.png",
              "sizes": "72x72",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/ios/76.png",
              "sizes": "76x76",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/ios/80.png",
              "sizes": "80x80",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/ios/87.png",
              "sizes": "87x87",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/ios/100.png",
              "sizes": "100x100",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/ios/114.png",
              "sizes": "114x114",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/ios/120.png",
              "sizes": "120x120",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/ios/128.png",
              "sizes": "128x128",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/ios/144.png",
              "sizes": "144x144",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/ios/152.png",
              "sizes": "152x152",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/ios/167.png",
              "sizes": "167x167",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/ios/180.png",
              "sizes": "180x180",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/ios/192.png",
              "sizes": "192x192",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/ios/256.png",
              "sizes": "256x256",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/ios/512.png",
              "sizes": "512x512",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/ios/1024.png",
              "sizes": "1024x1024",
              "purpose": "maskable",
              "type": "image/png"
          }
        ]
      }
    })
  ],
});
