const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Karla", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
