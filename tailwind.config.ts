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
        navy: {
          50: "#e7eaf3",
          100: "#c2cce3",
          500: "#1a2a5e",
          600: "#142050",
          700: "#0e1640",
          800: "#090e2e",
          900: "#04081e",
        },
        gold: {
          400: "#f5c842",
          500: "#d4a017",
          600: "#b8880f",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
