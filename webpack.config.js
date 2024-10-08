'use strict';

var path = require('path');

module.exports = [{
  devtool: 'inline-source-map',
  entry: './index.js',
  mode: 'development',
  resolve: {
    fallback: {
      path: require.resolve('path-browserify'),
      querystring: require.resolve('querystring-es3'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/env', {
                targets: 'cover 100%'
              }]
            ]
          }
        }
      }
    ]
  },
  name: 'json-refs',
  optimization: {
    minimize: false
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'json-refs.js',
    library: 'JsonRefs'
  }
}, {
  entry: './index.js',
  mode: 'production',
  resolve: {
    fallback: {
      path: require.resolve('path-browserify'),
      querystring: require.resolve('querystring-es3'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/env', {
                targets: 'cover 100%'
              }]
            ]
          }
        }
      }
    ]
  },
  name: 'json-refs-min',
  optimization: {
    minimize: true
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'json-refs-min.js',
    library: 'JsonRefs'
  }
}];
