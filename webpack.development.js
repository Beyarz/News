const path = require('path')

module.exports = {
  entry: './src/index.ts',

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public')
  },

  mode: 'development',
  devtool: 'inline-source-map',

  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 8080,
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
