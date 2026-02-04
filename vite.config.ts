import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	server: {
		port: 5173,
		host: true,
		hmr: {
			clientPort: 5173
		}
	},
	optimizeDeps: {
		exclude: ['@mastra/core', '@mastra/mcp']
	}
});
