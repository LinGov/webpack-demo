const path = require('path');
const webpack = require('webpack');
const AutoDLLPLugin = require('autodll-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const env = process.env.NODE_ENV;

module.exports = {
  mode: env === 'production' ? 'production' : 'development',
  entry: {
    app: [
      // 热重载
      // 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
      './src/main.js',
    ],
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    publicPath: '/',
  },
  plugins: [
    /*   new webpack.DllReferencePlugin({
      context: path.resolve(__dirname, '..'),
      manifest: require('./vendor-manifest.json'),
    }), */
    new AutoDLLPLugin({
      filename: '[name].dll.js',
      entry: {
        vendor: ['lodash'],
      },
      plugins: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: false,
          uglifyOptions: {
            output: {
              comments: false,
              beautify: false,
            },
          },
        }),
      ],
    }),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};
