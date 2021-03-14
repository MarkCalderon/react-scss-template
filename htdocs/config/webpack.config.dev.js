const path = require('path');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = env => {
  /** ENVIRONMENT TEST **/
  // console.log('NODE_ENV:', env.NODE_ENV)
  // console.log('Production: ', env.production)

  /** DEVELOPMENT BUILD **/
  console.log('DEVELOPMENT BUILD');
  console.log(path.resolve(__dirname, '../src'));
  return {
    mode: 'development',
    entry: path.join(__dirname, '../src/Index.js'),
    //### OUTPUT ###//
    output: {
      path: path.join(__dirname, '../dist/assets'),
      filename: 'bundle.js',
    },
    devServer: {
      contentBase: path.join(__dirname, '../dist/'),
      publicPath: '/assets/',
      watchContentBase: true,
      compress: true,
      open: true,
      // liveReload: true,
      inline: true,
      hot: true,
      historyApiFallback: true,
      watchOptions:{
        poll: true,
        ignored: "/node_modules/"
      }
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
            // Creates `style` nodes from JS strings
            "style-loader",
            // // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'images',
              },
            },
          ],
        },
      ]
    },
    //## PLUGINS ##//
  };
};