import { defineConfig, passthroughImageService } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  output: 'hybrid',
  adapter: vercel(),
  integrations: [tailwind(), react()],
  build: {
    inlineStylesheets: 'auto',
  },
  image: {
    service: passthroughImageService(),
  },
  vite: {
    server: {
      allowedHosts: true,
    },
  },
});
