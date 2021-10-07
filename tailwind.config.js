module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
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
      success: "#218041",
      error: "#912020",
      hover: {
        card: "",
        link: "#a392be",
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
