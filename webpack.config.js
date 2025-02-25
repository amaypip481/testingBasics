const path = require('path');

module.exports = {
  entry: './src/sum.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 3000
  },
  mode: 'development'
};
