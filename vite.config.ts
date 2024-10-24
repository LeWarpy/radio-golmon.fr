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
        globIgnores: [
          'node_modules/**/*',
          'sw.js',
          'workbox-*.js',
          'workbox-*.js.map',
        ],
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
              "src": "assets/icons/windows11/SmallTile.scale-100.png",
              "sizes": "71x71",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/SmallTile.scale-125.png",
              "sizes": "89x89",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/SmallTile.scale-150.png",
              "sizes": "107x107",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/SmallTile.scale-200.png",
              "sizes": "142x142",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/SmallTile.scale-400.png",
              "sizes": "284x284",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/Square150x150Logo.scale-100.png",
              "sizes": "150x150",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/Square150x150Logo.scale-125.png",
              "sizes": "188x188",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/Square150x150Logo.scale-150.png",
              "sizes": "225x225",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/Square150x150Logo.scale-200.png",
              "sizes": "300x300",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/Square150x150Logo.scale-400.png",
              "sizes": "600x600",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/Wide310x150Logo.scale-100.png",
              "sizes": "310x150",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/Wide310x150Logo.scale-125.png",
              "sizes": "388x188",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/Wide310x150Logo.scale-150.png",
              "sizes": "465x225",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/Wide310x150Logo.scale-200.png",
              "sizes": "620x300",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/Wide310x150Logo.scale-400.png",
              "sizes": "1240x600",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/LargeTile.scale-100.png",
              "sizes": "310x310",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/LargeTile.scale-125.png",
              "sizes": "388x388",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/LargeTile.scale-150.png",
              "sizes": "465x465",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/LargeTile.scale-200.png",
              "sizes": "620x620",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/LargeTile.scale-400.png",
              "sizes": "1240x1240",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/Square44x44Logo.scale-100.png",
              "sizes": "44x44",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/Square44x44Logo.scale-125.png",
              "sizes": "55x55",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/Square44x44Logo.scale-150.png",
              "sizes": "66x66",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/Square44x44Logo.scale-200.png",
              "sizes": "88x88",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/Square44x44Logo.scale-400.png",
              "sizes": "176x176",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/StoreLogo.scale-100.png",
              "sizes": "50x50",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/StoreLogo.scale-125.png",
              "sizes": "63x63",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/StoreLogo.scale-150.png",
              "sizes": "75x75",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/StoreLogo.scale-200.png",
              "sizes": "100x100",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/StoreLogo.scale-400.png",
              "sizes": "200x200",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/SplashScreen.scale-100.png",
              "sizes": "620x300",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/SplashScreen.scale-125.png",
              "sizes": "775x375",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/SplashScreen.scale-150.png",
              "sizes": "930x450",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/SplashScreen.scale-200.png",
              "sizes": "1240x600",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/SplashScreen.scale-400.png",
              "sizes": "2480x1200",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/Square44x44Logo.targetsize-16.png",
              "sizes": "16x16",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/Square44x44Logo.targetsize-20.png",
              "sizes": "20x20",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/Square44x44Logo.targetsize-24.png",
              "sizes": "24x24",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/Square44x44Logo.targetsize-30.png",
              "sizes": "30x30",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/Square44x44Logo.targetsize-32.png",
              "sizes": "32x32",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/Square44x44Logo.targetsize-36.png",
              "sizes": "36x36",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/Square44x44Logo.targetsize-40.png",
              "sizes": "40x40",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/Square44x44Logo.targetsize-44.png",
              "sizes": "44x44",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/Square44x44Logo.targetsize-48.png",
              "sizes": "48x48",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/Square44x44Logo.targetsize-60.png",
              "sizes": "60x60",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/Square44x44Logo.targetsize-64.png",
              "sizes": "64x64",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/Square44x44Logo.targetsize-72.png",
              "sizes": "72x72",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/Square44x44Logo.targetsize-80.png",
              "sizes": "80x80",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/Square44x44Logo.targetsize-96.png",
              "sizes": "96x96",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/Square44x44Logo.targetsize-256.png",
              "sizes": "256x256",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/Square44x44Logo.altform-unplated_targetsize-16.png",
              "sizes": "16x16",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/Square44x44Logo.altform-unplated_targetsize-20.png",
              "sizes": "20x20",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/Square44x44Logo.altform-unplated_targetsize-24.png",
              "sizes": "24x24",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/Square44x44Logo.altform-unplated_targetsize-30.png",
              "sizes": "30x30",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/Square44x44Logo.altform-unplated_targetsize-32.png",
              "sizes": "32x32",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/Square44x44Logo.altform-unplated_targetsize-36.png",
              "sizes": "36x36",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/Square44x44Logo.altform-unplated_targetsize-40.png",
              "sizes": "40x40",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/Square44x44Logo.altform-unplated_targetsize-44.png",
              "sizes": "44x44",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/Square44x44Logo.altform-unplated_targetsize-48.png",
              "sizes": "48x48",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/Square44x44Logo.altform-unplated_targetsize-60.png",
              "sizes": "60x60",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/Square44x44Logo.altform-unplated_targetsize-64.png",
              "sizes": "64x64",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/Square44x44Logo.altform-unplated_targetsize-72.png",
              "sizes": "72x72",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/Square44x44Logo.altform-unplated_targetsize-80.png",
              "sizes": "80x80",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/Square44x44Logo.altform-unplated_targetsize-96.png",
              "sizes": "96x96",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/Square44x44Logo.altform-unplated_targetsize-256.png",
              "sizes": "256x256",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",
              "sizes": "16x16",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",
              "sizes": "20x20",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",
              "sizes": "24x24",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",
              "sizes": "30x30",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",
              "sizes": "32x32",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",
              "sizes": "36x36",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",
              "sizes": "40x40",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",
              "sizes": "44x44",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",
              "sizes": "48x48",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",
              "sizes": "60x60",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",
              "sizes": "64x64",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",
              "sizes": "72x72",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",
              "sizes": "80x80",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",
              "sizes": "96x96",
              "purpose": "maskable",
              "type": "image/png"
          },
          {
              "src": "assets/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",
              "sizes": "256x256",
              "purpose": "maskable",
              "type": "image/png"
          },
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
