const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: ['./src/script.js'],
  },
  output: {
    path: path.resolve(__dirname, 'src'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, './'),
    },
    compress: true,
    port: 9000,
    hot: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
