const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: "en-US",
    locales: ["en-US", "de-DE"],
    localePath: path.resolve("./public/locales"),
  },
};
