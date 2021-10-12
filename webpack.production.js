const path = require('path')

module.exports = {
  entry: './src/index.ts',

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public')
  },

  devtool: 'inline-source-map',
  mode: 'production',

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
