/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				'light-500': '#EAE8FF',
				'light-600': '#ADACB5',
				'dark-500': '#2D3142',
				'dark-600': '#212431',
				'dark-700': '#171922',
				'accent-500': '#B0D7FF',
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			},
		},
	},
	plugins: [require('@tailwindcss/line-clamp')],
};
