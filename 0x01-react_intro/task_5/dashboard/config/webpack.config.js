const path = require('path')

module.export = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/index.js'),

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    assetModuleFilename: '[name][ext]'
  },

  devtool: 'inline-source-map', //for debugging

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
       {//asset loader
        test: /\.(png|svg|jpeg|jpg|gif)$/i,
        type: 'asset/resource'
      }
    ]
  }
}