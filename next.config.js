// const withPWA = require("next-pwa");

// module.exports = withPWA({
//   // pwa: {
//   //   dest: "public",
//   //   register: true,
//   //   skipWaiting: true,
//   // },
// });

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});

module.exports = withPWA({
  // next.js config
  i18n: {
    locales: ["en"], // Add your languages here
    defaultLocale: "en",
    localeDetection: false,
  },

  images: {
    domains: ["cdn.jsdelivr.net"],
  },
});
