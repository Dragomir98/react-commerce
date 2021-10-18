module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    maxWidth: {
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
    },
    extend: {
      colors: {
        primary: {
          default: "#2f2a38",
        },
        secondary: {
          default: "#8742f5",
        },
        alt: {
          default: "#d6d3db",
        },
        info: "#0e5ae6",
        success: "#218041",
        error: "#912020",
        pending: "#e6970e",
        hover: {
          card: "",
          link: "#a392be",
        },
      },
      inset: {
        72: "72px",
      },
      keyframes: {
        drop: {
          "0%": { height: "0vh" },
          "100%": { height: "100vh" },
        },
        dropReverse: {
          "0%": { height: "100vh" },
          "100%": { height: "0vh" },
        },
        fade: {
          "0%": { opacity: 0 },
          "50%": { opacity: 0.5 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        drop: "drop 0.5s ease-in-out",
        dropReverse: "dropReverse 0.5s ease-in-out",
        fade: "fade 0.5s ease-in-out",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "480px",
          },
          "@screen md": {
            maxWidth: "768px",
          },
          "@screen lg": {
            maxWidth: "976px",
          },
          "@screen xl": null,
        },
      });
    },
  ],
};
