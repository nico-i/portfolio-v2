module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.tsx ",
    "./components/**/*.tsx ",
    "./sections/**/*.tsx ",
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
