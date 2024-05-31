const withTM = require('next-transpile-modules')(['shadcn-ui']);
const webpack = require('webpack');
const NodeSchemePlugin = require('./custom-webpack-plugin');

module.exports = withTM({
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  async headers() {
    return [
      {
        // Apply these headers to all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ],
      },
    ];
  },
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      net: false,
      'fs/promises': false,
      tls: false,
      child_process: false,
      readline: false,
      module: false,
      buffer: require.resolve('buffer/'),
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
      process: require.resolve('process/browser'),
      'timers/promises': require.resolve('timers-browserify'),
      perf_hooks: false,
      worker_threads: false,
      'stream/web': require.resolve('stream-browserify'),
    };
    config.plugins.push(
      new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer'],
        process: 'process/browser',
      }),
      new NodeSchemePlugin()
    );
    return config;
  },
});
