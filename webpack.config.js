const ExtractTextPlugin = require('extract-text-webpack-plugin')
const postcssPresetEnv = require('postcss-preset-env')

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: __dirname,
    filename: 'index.js'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './',
    port: 8080,
    inline: true
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: 'source-map-loader' }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                modules: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: () => [
                  postcssPresetEnv({
                    autoprefixer: { grid: true }
                  })
                ]
              }
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: './index.css',
      allChunks: true
    })
  ]
}
