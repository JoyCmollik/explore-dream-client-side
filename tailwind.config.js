module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: '#FFCC05',
				main: '#303030',
				sub: '#A5A5A5',
				dark: '#1C1C1C',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
