const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  output: {
    filename: "name.js"
  },
  plugins: [
		new HtmlWebpackPlugin()
	],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }
    ]
  }
};
