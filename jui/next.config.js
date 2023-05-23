/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [
        path.join(__dirname, 'styles'),
        path.join(__dirname, 'components')
    ],
  },
  i18n: {
    locales: ['en', 'sv'],
    defaultLocale: 'en',
  },
}

module.exports = nextConfig
