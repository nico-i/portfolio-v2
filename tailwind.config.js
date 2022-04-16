module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.tsx",
    "./components/**/*.tsx",
    "./sections/**/*.tsx",
    "./utils/**/*.tsx",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "#006AFF",
      primary_dark: "#218CFF",
      light: "#fcfcfc",
      lighter: "#ffffff",
      danger: "#FF4000",
      danger_dark: "#FF481F",
      dark: "#262626",
      darker: "#1C1C1C",
      warning: "FFEA00",
      warning_dark: "#FFDD1F",
    },
    fontFamily: {
      sans: ["Poppins ", "sans-serif "],
    },
    extend: {
      boxShadow: {
        "fade-tb":
          "inset 0 80px 25px -35px #000000, inset 0 -80px 25px -35px #000000;",
      },
    },
    plugins: [require("@tailwindcss/forms")],
  },
};
