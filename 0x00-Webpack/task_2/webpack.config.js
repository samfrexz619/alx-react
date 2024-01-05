const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, 'js/dashboard_main.js'),

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    // assetModuleFilename: '[name][ext]',
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        // type: 'asset/resource',
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              disable: true,
            }
          }
        ]
      }
    ]
  },
};
