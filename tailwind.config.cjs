/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
				blob: "blob 4s infinite",
				typewriter: "typing 3.5s steps(30, end), blink-caret .75s step-end infinite", 
				navup: "navup 1s",
				navdrop: "navdrop 1s",
				
			},
			keyframes: {
				blob: {
					"0%": {
						transform: "translate(0px, 0px) scale(1)",
					},
					"33%": {
						transform: "translate(30px, -50px) scale(1.1)",
					},
					"66%": {
						transform: "translate(-20px, 20px) scale(0.9)",
					},
					"100%": {
						transform: "translate(0px, 0px) scale(1)",
					},
				},
				typing: {
					from: {
						width: "0%"
					},
					to: {
						width: "100%"
					}
				},
				navup: {
					"0%": {
						transform: "translateY(0rem)",
					},
					"100%": {
						transform: "translateY(-4rem)",
					}

				},
			},
		},
	},
	plugins: [],
}
