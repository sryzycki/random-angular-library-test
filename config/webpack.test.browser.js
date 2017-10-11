const helpers = require('./helpers');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonTestConfig = require('./webpack.test.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = webpackMerge(commonTestConfig, {
  target: 'web',

  entry: {
    'test': 'mocha-loader!./config/mocha/mocha-browser-test-shim.js'
  },

  output: {
    path: helpers.root('tests'),
    publicPath: '/',
    filename: 'test.bundle.js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: helpers.root('src/test/mocha-index.html')
    })
  ]
});
