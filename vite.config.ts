import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    sourcemap: false,
    /**
     * Lock JS + CSS minification to a baseline that predates the CSS Media
     * Queries Level 4 range syntax (`@media (width<=480px)`). Without this,
     * Vite's minifier rewrites `@media (max-width: ...)` → range syntax,
     * which silently breaks layout on iOS Safari < 16.4, older Android
     * Chrome, and most in-app webviews (Instagram, LinkedIn, TikTok).
     */
    target: ['chrome89', 'safari14', 'firefox89', 'edge89'],
    cssTarget: ['chrome89', 'safari14', 'firefox89', 'edge89'],
  },
});
