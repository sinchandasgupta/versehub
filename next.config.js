/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: ["images.genius.com", "images.rapgenius.com", "assets.genius.com"],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};
