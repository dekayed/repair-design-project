const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var path = require('path');

const config = {
  module: {
    rules: [],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};

module.exports = (env, argv) => {
  if (argv.mode === 'production') {
    config.module.rules.push(
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      }
    );
    config.module.rules.push(
      { 
        test: /\.(png|svg|otf|ttf)$/, 
        loader: 'file-loader?name=/[name].[ext]',
      }
    );
    config.output = {
      path: path.resolve(__dirname, './assets/'),
      publicPath: '/assets',
    }
  } else {
    config.module.rules.push(
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      }
    );
    config.module.rules.push(
      { 
        test: /\.(png|svg|otf|ttf)$/, 
        loader: 'file-loader'
      },
    );
    config.output = {
      path: path.resolve(__dirname, './dev/'),
      publicPath: '/dev',
    }
  }
  return config;
}