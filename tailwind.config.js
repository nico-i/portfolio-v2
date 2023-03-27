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
      white: "#ffffff",
      danger: "#FF4000",
      danger_dark: "#FF481F",
      dark: "#262626",
      darker: "#1C1C1C",
      warning: "FFEA00",
      warning_dark: "#FFDD1F",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif "],
    },
    dropShadow: {
      "skill-circle": [
        "0 10px 8px rgb(0 0 0 / 0.03)",
        "0 4px 3px rgb(0 0 0 / 0.05)",
      ],
    },
    extend: {
      boxShadow: {
        "fade-tb":
          "inset 0 80px 25px -35px #000000, inset 0 -80px 25px -35px #000000;",
      },

      animation: {
        "fade-in": "fade-in 0.9s ease",
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: 0,
          },
          "20%": {
            opacity: 0.1,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
    },
    plugins: [require("@tailwindcss/forms")],
  },
};
