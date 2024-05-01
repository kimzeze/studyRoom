import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/hooks/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        "68": "4.25rem",
        "48": "3rem",
        "50": "3.125rem",
        "45": "2.8125rem",
        "42": "2.625rem",
        "36": "2.25rem",
        "32": "2rem",
        "30": "1.875rem",
        "28": "1.75rem",
        "24": "1.5rem",
        "22": "1.375rem",
        "20": "1.25rem",
        "18": "1.125rem",
        "16": "1rem",
        "15": "0.9375rem",
        "14": "0.875rem",
        "12": "0.75rem",
        "10": "0.625rem",
      },
      fontWeight: {
        regular: "400",
        bold: "700",
        semibold: "600",
        medium: "500",
        extrabold: "800",
      },
      colors: {
        primary: "#222222",
        white: "#ffffff",
        tertiary: "#A0D1EF",
        secondary: "#FF451F",
        warning: "#D7260D",
        down: "#f1f1f1",
        accent: "#ff4800",
        product: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
export default config;
