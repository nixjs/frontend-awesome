/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    APP_ENV: process.env.APP_ENV,
  },
  images: {
    domains: ["cdn.bitkeep.vip", "cdn.changelog.com"],
  },
};

module.exports = nextConfig;
