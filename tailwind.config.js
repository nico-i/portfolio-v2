module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx} ",
    "./components/**/*.{js,ts,jsx,tsx} ",
    "./sections/**/*.{js,ts,jsx,tsx} ",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "#007dff",
      primary_dark: "#2890FF",
      light: "#f7f7f7",
      lighter: "#fcfcfc",
      dark: "#262626",
      darker: "#1a1a1a",
    },
    fontFamily: {
      sans: ["Poppins ", "sans-serif "],
    },
  },
  extend: {},
  plugins: [require("@tailwindcss/forms")],
};
