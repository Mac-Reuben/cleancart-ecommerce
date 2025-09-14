const path = require("path");

/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  // 👇 This tells Next.js to generate static HTML in `out/`
  output: 'export',

  // 👇 Required for GitHub Pages when hosted in a subfolder
  basePath: isProd ? '/cleancart-ecommerce-main' : '',
  assetPrefix: isProd ? '/cleancart-ecommerce-main/' : '',

  // 👇 Disable image optimization for static export
  images: {
    unoptimized: true,
  },

  // 👇 Ensure trailing slash for proper routing
  trailingSlash: true,

  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);

    // Fix Handlebars loader warnings
    config.module = config.module || {};
    config.module.rules = config.module.rules || [];
    config.module.rules.push({
      test: /\.hbs$/,
      use: [
        {
          loader: 'handlebars-loader',
          options: {
            runtime: false,
          },
        },
      ],
    });
    return config;
  },
};

module.exports = nextConfig;
