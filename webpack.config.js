var Webpack = require('webpack');
var path = require('path');

var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'public', 'build');
var mainPath = path.resolve(__dirname, 'app', 'index.js');

var config = {
  devtool: 'eval',
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    mainPath
  ],
  output: {
    filename: 'bundle.js',
    path: buildPath,
    publicPath: '/build/'
  },
  module: {
    rules: [
      {
        test: [/\.js$|\.jsx$/],
        loader: 'babel-loader',
        exclude: [nodeModulesPath]
      },
      {
        test: /\.(css|pcss|scss)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader' // creates style nodes from JS strings
          }, {
            loader: 'css-loader'   //translates CSS into CommonJS
          }, {
            loader: 'sass-loader'  // compiles Sass to CSS
          }
        ]
      }, {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?.*$|$)/,
        use: [
          {
            loader: 'file-loader' // Instructs webpack to emit the required object as file and to return its public URL
          }
        ]
      }
    ]
  },
  plugins: [
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.NamedModulesPlugin(),
    new Webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom',
      axios: 'axios',
      '_': 'lodash'
    })
  ]
};

module.exports = config;
