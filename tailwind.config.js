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
      fontFamily: {
        cursive: font_family.cursive,
      },
      gridTemplateColumns: {
        auto_1fr_auto: "auto 1fr auto",
      },
      gridTemplateRows: {
        p_fr_auto: `${spacing[2]} 1fr auto`,
        auto_1fr_auto: "auto 1fr auto",
      },
      translate: {
        100_2: `calc(100% - ${spacing[2]})`,
      },
    },
  },
  plugins: [],
};
