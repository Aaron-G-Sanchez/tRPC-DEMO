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
    path: path.resolve(__dirname, 'dist/', 'CLIENT')
  },
  devServer: {
    static: path.resolve(__dirname, 'dist/', 'CLIENT'),
    port: 3000
  }
}
