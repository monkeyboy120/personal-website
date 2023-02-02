import { defineConfig } from 'astro/config';

// https://astro.build/config
import svelte from "@astrojs/svelte";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config

// https://astro.build/config

// https://astro.build/config
import tailwind@latest from "@astrojs/tailwind";
import svelte@latest from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), tailwind(), tailwind@latest(), svelte@latest()]
});