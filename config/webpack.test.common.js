const helpers = require('./helpers');
const webpack = require('webpack');

module.exports = {
  devtool: "inline-source-map", // To have breakpoints on both, test sources and app sources
                                // NB : Using inline-cheap-module-source-map  activate breakpoints only on test code

  resolve: {
    extensions: ['.ts', '.js']
  },

  resolveLoader: {
    moduleExtensions: ['-loader'] // To bypass mocha-loader incompatibility with webpack :
                                  // mocha-loader still using loaders without the "-loader" suffix,
                                  // which is forbidden with webpack v2
  },

  module: {
    rules: [
      {
        test: /^(?!.*\.spec\.ts).*\.ts$/,
        include: helpers.root('src'),
        loaders: ['istanbul-instrumenter-loader', 'awesome-typescript-loader', 'angular2-template-loader']
      },
      {
        test: /\.spec\.ts$/,
        include: helpers.root('src'),
        loaders: [
          {
            loader: 'awesome-typescript-loader',
            options: {configFileName: helpers.root('tsconfig.json')}
          }, 'angular2-template-loader'
        ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader'

      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'null-loader'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ['raw-loader', 'sass-loader'] // sass-loader not scss-loader
      },
      {
        test: /\.css$/,
        exclude: helpers.root('src', 'app'),
        loader: 'null-loader'
      },
      {
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        loader: 'raw-loader'
      }
    ]
  },

  plugins: [
    // Workaround for angular/angular#11580
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)@angular/,
      helpers.root('src'),
      {}
    ),
  ],

  performance: {
    hints: false
  }
};
