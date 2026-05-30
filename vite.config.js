import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// For GitHub Project Pages, set base to your repo name, e.g. base: '/amjad-elite-fitness/'
export default defineConfig({
  plugins: [react()],
  base: '/',
});
