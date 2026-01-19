import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'

export default defineConfig({
    plugins: [
        react(),
        legacy({
            targets: ['defaults', 'not IE 11', 'iOS >= 12', 'Android >= 5'],
            additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
            renderLegacyChunks: true,
            polyfills: true,
        }),
    ],
    base: '/international-law-reference/',
    build: {
        target: 'es2015',
        minify: false, // DISABLE MINIFICATION TO FIX MOBILE CRASH
        sourcemap: true, // Enable source maps for better debugging
        cssMinify: false,
    }
})
