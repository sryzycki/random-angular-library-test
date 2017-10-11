const nodeExternals = require('webpack-node-externals');
const helpers = require('./helpers');
const webpackMerge = require('webpack-merge');
const commonTestConfig = require('./webpack.test.common.js');

module.exports = webpackMerge(commonTestConfig, {
  target: 'node',

  output: {
    // use absolute paths in sourcemaps (important for debugging via IDE)
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
  },

  externals: [
    nodeExternals()
  ]
});
