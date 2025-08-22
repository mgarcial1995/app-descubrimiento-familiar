// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        slab: ["Roboto Slab", "serif"],
      },
      colors: {
        primary: "#006A4E",
        secondary: "#2D2D2D",
        accent: "#FFD700",
        light: "#F9F9F9",
      },
    },
  },
  plugins: [],
};
