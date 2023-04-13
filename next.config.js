/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");

const config = {
  images: {
    domains: ["images.genius.com", "images.rapgenius.com", "assets.genius.com"],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};

const nextConfig = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
})(config);

module.exports = nextConfig;
