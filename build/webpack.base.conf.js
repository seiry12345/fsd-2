const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
  assets: 'assets/',
}

module.exports = {
  externals: {
    paths: PATHS,
  },

  entry: {
    cards: `${PATHS.src}/pages/cards/index`,
    headersFooters: `${PATHS.src}/pages/headers-footers/index`,
    front: `${PATHS.src}/pages/front/index`,
    searchRoom: `${PATHS.src}/pages/search-room/index`,
    roomDetail: `${PATHS.src}/pages/room-detail/index`,
  },

  output: {
    filename: `${PATHS.assets}js/[name].[hash].js`,
    path: PATHS.dist,
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node-modules/',
      },

      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true,
        },
      },

      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          name: `[name].[ext]`,
        },
      },

      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'assets/images',
          url: false,
        },
      },

      {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {sourceMap: true},
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {path: `./postcss.config.js`},
            },
          },
          {
            loader: 'sass-loader',
            options: {sourceMap: true},
          },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                `${PATHS.src}/assets/scss/utils/vars.scss`,
                `${PATHS.src}/assets/scss/utils/mixins.scss`,
              ],
            },
          },
        ],
      },

      {
        test: /\.css$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {sourceMap: true},
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {path: `./postcss.config.js`},
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),

    new HtmlWebpackPlugin({
      template: `${PATHS.src}/pages/front/index.pug`,
      filename: 'index.html',
    }),

    new HtmlWebpackPlugin({
      template: `${PATHS.src}/pages/colors/index.pug`,
      filename: 'colors.html',
    }),

    new HtmlWebpackPlugin({
      template: `${PATHS.src}/pages/form-elements/index.pug`,
      filename: 'form-elements.html',
    }),

    new HtmlWebpackPlugin({
      template: `${PATHS.src}/pages/cards/index.pug`,
      filename: 'cards.html',
    }),

    new HtmlWebpackPlugin({
      template: `${PATHS.src}/pages/headers-footers/index.pug`,
      filename: 'headers-footers.html',
    }),

    new HtmlWebpackPlugin({
      template: `${PATHS.src}/pages/search-room/index.pug`,
      filename: 'search-room.html',
    }),

    new HtmlWebpackPlugin({
      template: `${PATHS.src}/pages/room-detail/index.pug`,
      filename: 'room-detail.html',
    }),

    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      outputPath: './assets/css',
    }),


    new CopyWebpackPlugin([
      {
        from: `${PATHS.src}/${PATHS.assets}fonts`,
        to: `${PATHS.assets}fonts`,
      },

      {
        from: `${PATHS.src}/${PATHS.assets}images`,
        to: `${PATHS.assets}images`,
      },

      {from: `${PATHS.src}/static`, to: ''},
    ]),
  ],
}