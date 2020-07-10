/*
! https://www.youtube.com/watch?v=MRlBKfGktwI
*/
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let config = {
  entry: './#src/js/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
    publicPath: 'dist/'
  },
  devServer: {
    overlay: true // Сообщение об ошибке в окне броузера
  },
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      // exclude: '/node_modules/'
    }, {
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader'],
      /*use: [
        'style-loader',
        'css-loader',
      ]*/
    }]
  },

};

module.exports = (env, options) => {
  let production = options.mode === 'production';
  config.devtool = production ? /*'source-map'*/ false : 'eval-sourcemap';

  return config;
}