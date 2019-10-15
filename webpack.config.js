const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var path = require('path');

module.exports = {
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            process.env.NODE_ENV == 'production'
              ? 'style-loader'
              : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader',
          ],
        },
        { 
          test: /\.(png|svg|otf|ttf)$/, 
          loader: 'file-loader?name=/[name].[ext]' 
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),
    ],
    output: {
      path: path.resolve(__dirname, './assets'),
      publicPath: '/repair-design-project/assets',
    }
  };