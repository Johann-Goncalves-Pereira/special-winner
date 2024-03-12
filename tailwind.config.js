import colors from "tailwindcss/colors";
import { spacing } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		colors: {
			transparent: "transparent",
			current: "currentColor",
			surface: colors.stone,
			primary: colors.cyan,
			secondary: colors.teal,
			accent: colors.rose,
		},
		extend: {
			content: {
				DEFAULT: "''",
			},
			borderRadius: {
				inherit: "inherit",
			},
			gridTemplateColumns: {
				auto_1fr_auto: "auto 1fr auto",
			},

			gridTemplateRows: {
				auto_1fr_auto: "auto 1fr auto",
			},
			
			height: {
				dvh: "100dvh",
			},
			width: {
				dvw: "100dvw",
			},
			transitionProperty: {
				width: "width",
				outline: "outline",
			},
		},
	},
	plugins: [],
};
