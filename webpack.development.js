const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, './src/index.ts'),
  mode: 'development',
  devtool: 'inline-source-map',
  watch: true,
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: 'main.js'
  },
  node: {
    fs: 'empty'
  },
  module: {
    rules: [
      {
        test: [
          /\.ts?$/
        ],
        use: [
          'ts-loader'
        ],
        resolve: {
          extensions: ['.ts', '.js']
        },
        exclude: /node_modules/
      },
      {
        test: [
          /\.scss$/
        ],
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ],
        resolve: {
          extensions: ['.scss', '.css']
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('autoprefixer')
              ]
            }
          }
        ]
      }
    ]
  }
}
