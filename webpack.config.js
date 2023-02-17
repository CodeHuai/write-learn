const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index_1.js',
  output: {
    clean: true,
    filename: "./js/main.js",
    path: path.resolve(__dirname, './dist')
  },
  devServer: {
    hot: true
  },
  module: {
    rules: [
      {test: /\.js$/, loader: "babel-loader"}
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin()
  ]
}
