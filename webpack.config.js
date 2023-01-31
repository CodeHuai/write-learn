const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  output: {
    filename: "main.js",
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
    new CleanWebpackPlugin()
  ]
}
