import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import netlify from "@astrojs/netlify";

export default defineConfig({
  integrations: [tailwind({
    // Example: Provide a custom path to a Tailwind config file
    configFile: './tailwind.config.mjs',
  }), react()],
  output: "server",
  adapter: netlify()
});