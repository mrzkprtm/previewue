import { defineConfig, passthroughImageService } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  output: 'hybrid',
  site: 'https://ultimateducation.co.id',
  adapter: vercel(),
  integrations: [tailwind(), react()],
  build: {
    inlineStylesheets: 'auto',
  },
  image: {
    // service: passthroughImageService(),
    domains: [
      "images.unsplash.com",
      "placehold.co",
      "i.pravatar.cc",
      "lh3.googleusercontent.com"
    ],
  },
  prefetch: true,
  vite: {
    server: {
      allowedHosts: true,
    },
  },
});
