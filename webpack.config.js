var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './index.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader!postcss-loader'
        )
      }
	  ]
  },
  plugins: [
      new ExtractTextPlugin("[name].css")
  ]
};