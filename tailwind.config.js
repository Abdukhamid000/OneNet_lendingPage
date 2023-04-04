/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      white: {
        100: "rgba(255, 255, 255, 0.1)",
        200: "rgba(255, 255, 255, 0.2)",
        300: "rgba(255, 255, 255, 0.3)",
        400: "rgba(255, 255, 255, 0.4)",
        500: "rgba(255, 255, 255, 0.5)",
        600: "rgba(255, 255, 255, 0.6)",
        700: "rgba(255, 255, 255, 0.7)",
        800: "rgba(255, 255, 255, 0.8)",
        900: "rgba(255, 255, 255, 0.9)",
      },
      normal: "#fff",
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
      backgroundImage: {
        leftArrow: "url('/src/images/ArrowLeft.svg')",
        rightArrow: "url('/src/images/ArrowRight.svg')",
      },
    },
  },
  plugins: [],
};
