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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
