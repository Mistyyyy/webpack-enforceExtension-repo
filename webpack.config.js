const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',

  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'a.bundle.js',
  },

  resolve: {
    enforceExtension: true,
  },

  plugins: [
    new CleanWebpackPlugin()
  ]
}