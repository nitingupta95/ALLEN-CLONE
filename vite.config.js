 import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: './', // Ensure this is correctly set if your structure is different
  build: {
    rollupOptions: {
      // Ensure any necessary external dependencies are included
      external: [],
    },
  },
});
