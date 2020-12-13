const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.tsx'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: ''
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    index: 'index.html',
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]_[local]_[hash:base64:5]'
              }
            },
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env', '@babel/preset-react'
            ]
          }
        }
      },
      {
        test: /\.(ts|tsx)?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      chunks: ['index'],
      title: 'Type in Arabic',
      meta: {
        viewpoint: 'width=device-width, initial-scale=1',
        charset: 'utf-8'
      },
      template: 'src/template.html'
    })
  ]
}
