const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            process.env.NODE_ENV === 'production'
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
          loader: 'file-loader' 
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
  };