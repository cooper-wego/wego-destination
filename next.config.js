/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config")
require("dotenv").config()

const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN: process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN,
  },
  i18n,
}

module.exports = nextConfig
