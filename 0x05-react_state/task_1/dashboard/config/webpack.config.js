const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.js'),

  mode: 'development',

  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: 'bundle.js',
    assetModuleFilename: '[name][ext]'
  },

  performance: {
    maxAssetSize: 1000000,
    maxEntrypointSize: 1000000,
  },

  devServer: {
    port: 3000,
    hot: true,
    open: true,
    compress: true,
    historyApiFallback: true,
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './dist/index.html'),
      favicon: path.resolve(__dirname, '..', './dist/favicon.ico')
    }),
  ],

  module: {
    rules: [
      { //babel loader
        test: /\.(js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader', ],
      },
      {
        test: /\.(?:ico|png|svg|jpeg|jpg|gif)$/i,
        type: 'asset/resource',
        use: [
          // 'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              disable: true,
            },
          },
        ],
      },
    ]
  }
}