const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var path = require('path');

module.exports = {
    mode: process.env.NODE_ENV === 'production'
      ? 'production'
      : 'development',
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            process.env.NODE_ENV === 'production'
              ? MiniCssExtractPlugin.loader
              : 'style-loader',
            'css-loader',
            'sass-loader',
          ],
        },
        { 
          test: /\.(png|svg|otf|ttf)$/, 
          loader: process.env.NODE_ENV === 'production'
            ? 'file-loader?name=/[name].[ext]'
            : 'file-loader',
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),
    ],
    output: process.env.NODE_ENV === 'production'
      ? {
        path: path.resolve(__dirname, './assets/'),
        publicPath: '/repair-design-project/assets',
      }
      : {
        path: path.resolve(__dirname, './dev/'),
        publicPath: '/dev',
      },
  };