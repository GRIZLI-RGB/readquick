/** @type {import('tailwindcss').Config} */
const config = {
	darkMode: "class",
	content: ["./app/**/*.{ts,tsx}", "../../packages/ui/**/*.{ts,tsx}"],
	theme: {
		extend: {
			colors: {
				tested: "#ff0000",
			},
		},
	},
	plugins: [],
};

export default config;
