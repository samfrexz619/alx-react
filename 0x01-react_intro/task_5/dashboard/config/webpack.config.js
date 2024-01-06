const path = require('path')

module.export = {
  mode: 'development',
  entry: path.resolve(__dirname, '../src/index.js'),

  output: {
    path: path.resolve('../dist'),
    filename: 'bundle.js',
  },

  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },

  devtool: 'inline-source-map',

  devServer: {
    contentBase: path.resolve("./dist"),
    port: 3000,
    hot: true,
    // compress: true,
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