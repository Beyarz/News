const path = require('path')

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: 'main.js'
  },
  devtool: 'inline-source-map',
  mode: 'production',
  watch: false,
  node: {
    fs: 'empty'
  },
  module: {
    rules: [
      {
        test: [
          /\.tsx?$/
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
