const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // optional
  },

  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);

    config.module = config.module || {};
    config.module.rules = config.module.rules || [];
    config.module.rules.push({
      test: /\.hbs$/,
      use: [
        {
          loader: 'handlebars-loader',
          options: { runtime: false },
        },
      ],
    });
    return config;
  },
};

module.exports = nextConfig;
