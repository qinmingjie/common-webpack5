const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dirname = process.cwd();

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.join(Dirname, 'dist'),
    filename: '[name]_[contenthash:4].js'
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
        exclude: [/node_modules/, path.join(Dirname, './src/assets')]
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 2 } },
          'postcss-loader',
          'sass-loader'
        ],
        exclude: [/node_modules/, path.join(Dirname, './src/assets')]
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
      },
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: [/node_modules/]
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader'
          }
        ],
        exclude: [/node_modules/]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.vue', '.ts', '.json']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(Dirname, 'public/index.html')
    }),
    new DefinePlugin({
      TITLE: JSON.stringify('App')
    }),
    new VueLoaderPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(Dirname, 'src/assets'),
          to: 'assets',
          noErrorOnMissing: true
        }
      ]
    })
  ]
};
