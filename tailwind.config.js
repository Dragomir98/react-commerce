module.exports = {
  purge: [],
  darkMode: "class",
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
      full: "100%",
    },
    extend: {
      colors: {
        primary: {
          dark: "#2f2a38",
          light: "rgb(103 169 237)",
        },
        secondary: {
          dark: "#8742f5",
          light: "rgb(216 231 248)",
        },
        alt: {
          dark: "rgb(254 44 50)",
          light: "#ebebeb",
        },
        text: {
          dark: "#ededed",
          light: "#212121",
        },
        link: {
          darkHover: "#374151",
          lightHover: "#5c75d1",
        },
        body: {
          dark: "#374151",
          light: "#f0f0f0",
        },
        card: {
          dark: "#646a6e",
          light: "#d1dfe6",
        },
        info: "#0e5ae6",
        success: "#218041",
        error: "#912020",
        pending: "#e6970e",
        hover: {
          link: "#a392be",
        },
      },
      minHeight: {
        25: "25px",
        50: "50px",
        85: "85px",
        100: "100px",
        105: "105px",
        125: "125px",
        150: "150px",
        inherit: "inherit",
      },
      maxHeight: {
        25: "25px",
        50: "50px",
        85: "85px",
        100: "100px",
        105: "105px",
        125: "125px",
        150: "150px",
        inherit: "inherit",
      },
      inset: {
        72: "72px",
      },
      boxShadow: {
        defaultOuter: "4px 4px 8px 2px #000000",
        defaultInner: "inset -2px -2px 12px 2px rgba(0,0,0,0.6)",
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
        fade: "fade 0.8s ease-in-out",
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
