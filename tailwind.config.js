const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./pages/**/*.{js,ts,tsx}", "./components/**/*.{js,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["futura-pt", ...defaultTheme.fontFamily.sans],
        playfairDisplay: [
          '"Playfair Display"',
          ...defaultTheme.fontFamily.sans,
        ],
      },
      colors: {
        blue: {
          primary: "#1e1c28",
          secondary: "#282534",
          tertiary: "#2e2b3c",
          quaternary: "#3e3b4e",
          quinary: "#565364",
        },
        gold: {
          primary: "#996a4c",
          secondary: "#c2a694",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "85rem",
          marginRight: "auto",
          marginLeft: "auto",
          paddingRight: "1rem",
          paddingLeft: "1rem",
          "@screen md": {
            paddingRight: "2rem",
            paddingLeft: "2rem",
          },
        },
      });
    },
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
  ],
};
