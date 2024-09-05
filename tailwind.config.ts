import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        general: "#ffffff",
        primary_green: "#02981D",
        primary_black: "#171717",
        primary_gray: "#5E5E5E",
        secondary_green: "#013D0C",
        bold_green: "#015B11",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        slideshow: "slideshow 9s infinite", // 9s for three images, 3s each
      },
      keyframes: {
        slideshow: {
          "0%, 33.333%": { opacity: "1" }, // Wrap opacity values in quotes
          "33.334%, 66.666%": { opacity: "0" },
          "66.667%, 100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
