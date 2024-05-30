/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
				tilt: 'tilt 10s infinite linear',
			},
			keyframes: {
				tilt: {
					"0%, 50%, 100%": {
						transform: "rotate(0deg)",
					},
					"25%": {
						transform: "rotate(2deg)",
					},
					"75%": {
						transform: "rotate(-2deg)",
					},

					}
				}
			}
		},
	plugins: [],
}
