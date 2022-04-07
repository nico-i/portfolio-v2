const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: "en-US",
    locales: ["en-US", "de-DE"],
  },
  ...(typeof window === undefined
    ? { localePath: path.resolve("./public/locales") }
    : {}),
  reloadOnPrerender: false,
};
