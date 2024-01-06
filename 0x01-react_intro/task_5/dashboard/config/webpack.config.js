const path = require('path')

module.export = {
  mode: 'development',
  entry: './src/index.js',

  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
    assetModuleFilename: '[name][ext]'
  },

  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },

  devtool: 'inline-source-map',

  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist') 
    },
    port: 3000,
    open: true, //this is to open the browser automatically
    hot: true,
    compress: true,
    historyApiFallback: true
  },

  modules: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jp?g|gif)$/i,
        use: [
          'file-loader',
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