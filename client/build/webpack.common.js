const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')

module.exports = {
  entry: {
    app: './src/index.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        // image loader
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader'
      },
      {
        // svg loader for antd icon
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: '@svgr/webpack',
            options: {
              babel: false,
              icon: true
            }
          }
        ]
      },
      {
        // font loader
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader'
      },
      {
        test: /\.(csv|tsv)$/,
        loader: 'csv-loader'
      },
      {
        test: /\.xml$/,
        loader: 'xml-loader'
      },
      {
        test: /\.html$/,
        include: /src/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      filename: "index.html",
      template: 'public/index.html',
      title: 'Shiro Inventory',
      favicon: 'public/favicon.ico',
      minify: {
        collapseWhitespace: true
      }
    }),
    new AntdDayjsWebpackPlugin()
  ],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, '../src')
    }
  }
}
