import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react';

  // https://vitejs.dev/config/
  export default defineConfig({
    plugins: [react()],
    base: './', // This line is crucial for proper routing in GitHub Pages
  });
