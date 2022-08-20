const withImages = require('next-images');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = withImages({
  TrailingSlash: true,
  images: {
    disableStaticImages: true
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/contact': { page: '/contact' },
      '/blank-page': { page: '/blank-page' },
    };
  },
  publicRuntimeConfig: {
    localeSubpaths: typeof process.env.LOCALE_SUBPATHS === 'string'
      ? process.env.LOCALE_SUBPATHS
      : 'none',
  },
  webpack: (config, options) => {
    cssModules: true,
    config.plugins.push(
      //      new ESLintPlugin({
      //        exclude: ['node_modules']
      //      })
    );
    config.node = {}
    return config;
  },
});
