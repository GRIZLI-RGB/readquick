import baseConfig from "@readquick/config/tailwind.config";

/** @type {import('tailwindcss').Config} */
const config = {
	...baseConfig,
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./app/**/*.{js,ts,jsx,tsx}",
		"../../packages/ui/**/*.{js,ts,jsx,tsx}",
	],
};

export default config;
