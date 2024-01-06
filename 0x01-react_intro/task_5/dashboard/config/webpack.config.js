const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.export = {
  mode: 'development',
  entry: path.resolve(__dirname, '..', './src/index.js'),
  resolve: {
    extensions: ['.js']
  },

  output: {
    path: path.resolve(__dirname, '..', './dist'),
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
      { //babel loader
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
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
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './dist/index.html')
    })
  ]
}