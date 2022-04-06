module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.tsx",
    "./src/components/**/*.tsx",
    "./src/sections/**/*.tsx",
    "./src/utils/**/*.tsx",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "#006AFF",
      primary_dark: "#218CFF",
      light: "#fcfcfc",
      lighter: "#ffffff",
      dark: "#262626",
      darker: "#1C1C1C",
    },
    fontFamily: {
      sans: ["Poppins ", "sans-serif "],
    },
  },
  extend: {},
  plugins: [require("@tailwindcss/forms")],
};
