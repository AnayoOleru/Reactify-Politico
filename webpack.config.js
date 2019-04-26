const webpack = require('webpack');

module.exports = {
    entry: './src/index.jsx',
    devtool: 'source-map',
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          },
          {
              test: /\.js$/,
              exclude: /node_modules/,
              use: ['babel-loader', 'eslint-loader']
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            use: {
              loader: 'url-loader',
              options: {
                sourceMap: true,
                importLoaders: 1,
              },
            },
          },
          {
            test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            use: {
              loader: 'file-loader',
            },
          },
          {
            test: /\.(png|svg|gif|jpg|jpeg)$/,
            use: {
              loader: 'url-loader',
              options: {
                limit: 25000,
                name: 'images/[name].[ext]',
              },
            },
          },
        ]
      },
      resolve: {
        extensions: ['*', '.js', '.jsx']
      },
    output: {
      path: __dirname + '/public',
      publicPath: '/',
      filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
      ],
    devServer: {
      contentBase: './public',
      hot: true,
      historyApiFallback: true
    },
  };
