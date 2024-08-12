import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        irish: ["var(--font-irish-grover)"],
      },
      colors: {
        primary: "#269019",
        secondary: "#6AA762",
        border_color: "#2E2E2E",
      },
    },
  },
  plugins: [],
};
export default config;
