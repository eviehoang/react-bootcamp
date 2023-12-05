import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/react-porfolio/', // Adjust 'your-app-name' to the actual name of your app
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
});
