// import adapter from "@sveltejs/adapter-auto";
import adapter from "@sveltejs/adapter-node";
import { vitePreprocess } from "@sveltejs/kit/vite";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess({
    postcss: true,
  }),

  kit: {
    adapter: adapter(),
    csrf: false,
  },
};

export default config;
