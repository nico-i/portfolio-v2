const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: "en-US",
    locales: ["en-US", "de-DE"],
  },
  ns: ["common", "about", "contact", "hero", "nav"],
  defaultNS: "common",
  ...(typeof window === undefined
    ? { localePath: path.resolve("./public/locales") }
    : {}),
  reloadOnPrerender: false,
};
