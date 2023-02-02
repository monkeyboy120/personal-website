import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config

// https://astro.build/config

// https://astro.build/config

// https://astro.build/config

// https://astro.build/config
import tailwind@latest from "@astrojs/tailwind";
import svelte@latest from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
<<<<<<< HEAD
  integrations: [svelte(), tailwind()],
  output: "server",
  adapter: netlify()
=======
  integrations: [svelte(), tailwind(), tailwind@latest(), svelte@latest()]
>>>>>>> main
});