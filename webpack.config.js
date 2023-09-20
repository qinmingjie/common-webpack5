const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]_[contenthash:4].js',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader'
        ],
        exclude: [/node_modules/, path.join(__dirname, './src/assets')]
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 2 } },
          'postcss-loader',
          'sass-loader'
        ],
        exclude: [/node_modules/, path.join(__dirname, './src/assets')]
      },
      {
        test: /\.(png|jpg|jpeg|svg|)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 200 * 1024
          }
        },
        generator: {
          filename: 'image/[name]_[contenthash:4][ext]'
        }
      },
      {
        test: /\.(ttf|woff|woff2)$/,
        type: 'asset/resource',
        generator: {
          filename: 'font/[name][ext]'
        }
      },
      {
        test: /\.(mp3|mp4)$/,
        type: 'asset/resource',
        generator: {
          filename: 'media/[name]_[contenthash:4][ext]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public/index.html')
    }),
    new DefinePlugin({
      TITLE: JSON.stringify('App')
    })
  ]
};
