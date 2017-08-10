import path from 'path'

export default {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: 'index.js'
  },
  devtool: '#source-map',
  devServer: {
    contentBase: './',
    port: 8080,
    inline: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { modules: true } },
          {
            loader: 'postcss-loader',
            options: {
              plugins: function() {
                return [
                  require('autoprefixer')
                ]
              }
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: { loader: 'url-loader' }
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        use: { loader: 'json-loader' }
      }
    ]
  }
}
