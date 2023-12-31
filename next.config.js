const withBuilderDevTools = require("@builder.io/dev-tools/next")();

/** @type {import('next').NextConfig} */
const nextConfig = withBuilderDevTools({
  env: {
    BUILDER_API_KEY: process.env.NEXT_PUBLIC_BUILDER_API_KEY,
  },
});

module.exports = nextConfig;
