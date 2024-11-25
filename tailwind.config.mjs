import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */

export default {
	darkMode: "class",
	// content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	jit: true,
	theme: {
		extend: {
			fontFamily: {
				sans: ["Suisse", ...defaultTheme.fontFamily.sans],
				serif: ["American Grotesk", ...defaultTheme.fontFamily.serif],
			},
			colors: {
				bgColor: "#f8f9fa",
				bgColorDark: "#151718",
				borderColor: "#e6e8eb",
				borderColorDark: "#2b2f31",
				headerDark: "#1a1d1e",
				link: "#006adc",
				linkDark: "#52a9ff",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
