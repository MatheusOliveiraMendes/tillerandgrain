import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#E8B23C",
        secondary: "#F5D98B",
        accent: "#B88B55",
        support: "#A3B18A",
        contrast: "#1F1F1F",
        neutral: {
          dark: "#5E5E5E",
          light: "#FAF8F2",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        serif: ["Playfair Display", "ui-serif", "Georgia"],
      },
      boxShadow: {
        soft: "0 20px 45px -25px rgba(31,31,31,0.35)",
      },
    },
  },
  plugins: [],
} satisfies Config;
