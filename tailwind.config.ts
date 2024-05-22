import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "UFD-nameplate": "#ffc640",
        "UFD-bg": "#151515",
        "UFD-Combo-bg": "#222",
        "UFD-Char-bg": "#333"
      },
      fontFamily: {
        poppins: ["Poppins" , "sans-serif"],
      },
      dropShadow: {
        xl: "1px 1px 6px #111",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
