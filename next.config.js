const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },

  i18n: {
    locales: ["en"], // Add your languages here
    defaultLocale: "en",
    localeDetection: false,
  },
});
