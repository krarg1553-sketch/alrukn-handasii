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
        background: "#0a0b0e",
        surface: "#12141c",
        card: "#181b26",
        primary: {
          DEFAULT: "#00f2fe",
          dark: "#00c6ff",
        },
        border: "#2a2f42",
      },
    },
  },
  plugins: [],
};
export default config;
