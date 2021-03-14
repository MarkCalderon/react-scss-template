const path = require('path');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = env => {
  /** ENVIRONMENT TEST **/
  // console.log('NODE_ENV:', env.NODE_ENV)
  // console.log('Production: ', env.production)

  /** PRODUCTION BUILD **/
  console.log('PRODUCTION BUILD');
  return {
    mode: 'production',
    entry: path.join(__dirname, '../src/Index.js'),
    output: {
      path: path.join(__dirname, '../build'),
      filename: './assets/js/bundle.js',
    },
    module: {
      rules: [{
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: false,
              presets: [
                '@babel/preset-env',
                '@babel/preset-react'
              ]
            }
          }
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            // Load the CSS, set url = false to prevent following urls to fonts and images.
            {
              loader: "css-loader",
              options: {
                url: false,
                importLoaders: 1
              }
            },
            // Add browser prefixes and minify CSS.
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [
                    autoprefixer(),
                    cssnano()
                  ]
                },
              }
            },
            // Load the SCSS/SASS
            {
              loader: 'sass-loader'
            },
          ],
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: './assets/images',
              },
            },
          ],
        },
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: './assets/css/[name].css',
        chunkFilename: './assets/css/[id].css',
      }),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, '../src/pages/index.html'),
        filename: 'index.html'
      }),
    ]
  };
};