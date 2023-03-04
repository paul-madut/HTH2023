import { sveltekit } from '@sveltejs/kit/vite';
import basicSsl from '@vitejs/plugin-basic-ssl'

import { defineConfig } from 'vite';

export default defineConfig({
	server: {
		cors: false,
	},
	plugins: [basicSsl(), sveltekit()]
});
