import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	server: {
		allowedHosts: [ "5173-hiashleyj-basicallyreen-9u0e462zw55.ws-us118.gitpod.io" ]
	}
});
