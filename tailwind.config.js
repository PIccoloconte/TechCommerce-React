/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}", // Tutti i file JS, JSX, TS e TSX nella cartella src
    "./public/index.html",
  ],
  theme: {
    extend: {
      display: ["group-hover", "responsive", "hover"],
      colors: {
        secondary: "#909090",
        product_bg: "#EDEDED",
      },
      screens: {
        sm: "640px", // ≥ 640px (small - tablet)
        md: "768px", // ≥ 768px (medium)
        lg: "1024px", // ≥ 1024px (large - laptop)
        xl: "1280px", // ≥ 1280px (extra large - desktop)
        "2xl": "1536px", // ≥ 1536px (2x extra large)
      },
    },
  },
  plugins: [],
};
