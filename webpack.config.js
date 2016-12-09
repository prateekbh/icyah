var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');

module.exports = {
  entry: {
   app: './index.js',
   vendor: './vendor.js'
  },
  output: {
    path: __dirname + '/public/js',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
          plugins:[
            ["transform-react-jsx", { "pragma": "h" }]
          ]
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
      new ExtractTextPlugin("/css/[name].css"),
      new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
  ]
};