/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				shopify: {
					green: '#008060',
					blue: '#5C6AC4',
					red: '#D72C0D',
					yellow: '#FFC453'
				}
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				mono: ['Fira Code', 'monospace']
			}
		}
	},
	plugins: []
};
