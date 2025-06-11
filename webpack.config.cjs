const path = require('path')

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.ts', '.js']
  },
  entry: './src/CLIENT/index.ts',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist/', 'CLIENT'),
    publicPath: '/'
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public'),
      publicPath: '/'
    },
    port: 3000
  }
}
