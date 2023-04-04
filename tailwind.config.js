/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      white: "#fff",
      white60: "rgba(255, 255, 255, 0.6)",
      fireColor: "#FF3E2D",
      dark: "#0F131A",
      main: "#090D14",
      silver: "#32363C",
    },

    container: {
      padding: "1rem",
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }
        md: "768px",
        // => @media (min-width: 768px) { ... }
        lg: "1024px",
        // => @media (min-width: 1024px) { ... }
        xl: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
      center: true,
    },

    extend: {
      backgroundImage: {},
    },
  },
  plugins: [],
};
