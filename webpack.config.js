const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

let plugins;
let devtool;

const productionPlugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }),
  new CopyWebpackPlugin([{
    from: './index.html',
    to: 'index.html',
  }]),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
    },
    mangle: true,
    sourcemap: false,
    beautify: false,
    dead_code: true,
  }),
];

if (process.env.NODE_ENV === 'production') {
  plugins = productionPlugins;
  devtool = undefined;
}

module.exports = {
  entry: {
   'app': path.join(__dirname, 'src', 'app-client.js'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devtool,
  module: {
    loaders: [{
      test: path.join(__dirname, 'src'),
      loader: ['babel-loader'],
    }],
  },
  plugins,
};
