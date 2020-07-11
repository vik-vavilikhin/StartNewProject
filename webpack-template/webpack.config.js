const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    app: './#src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist'
  },
  devServer: {
    overlay: true // Сообщение об ошибке в браузере
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: '/node_modules/'
    }, {
      test: /\.scss$/,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            sourceMap: true
          },
        }, {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
            config: {
              path: '#src/config/postcss.config.js'
            }
          },
        }, {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          },
        }
      ]
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader, {
          loader: 'css-loader',
          options: {
            sourceMap: true
          },
        }, {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
            config: {
              path: '#src/config/postcss.config.js'
            }
          },
        },
      ],
    }]
  },
  plugins: [new MiniCssExtractPlugin({
    filename: '[name].css'
  })]
};