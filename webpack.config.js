const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    './src/index.jsx',
  ],
  module: {
    loaders: [{
      test: /\.js(x?)$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel',
    }],
    preLoaders: [{
      test: /\.js(x?)$/,
      loaders: ['eslint'],
    }, {
      test: /\.scss$/,
      loader: 'style!css!sass!postcss?pack=cleaner',
    }],
  },
  postcss: function () {
    return {
      defaults: [autoprefixer, cssnano],
      cleaner: [autoprefixer({ browsers: ['last 2 versions'] })],
    };
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};