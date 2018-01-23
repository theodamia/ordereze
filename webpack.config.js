const Webpack = require('webpack');
const path = require('path');

const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const buildPath = path.resolve(__dirname, 'public', 'build');
const mainPath = path.resolve(__dirname, 'app', 'index.jsx');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  devtool: 'eval',
  entry: [
    // 'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    mainPath,
  ],
  output: {
    filename: 'bundle.js',
    path: buildPath,
    publicPath: '/build/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: [/\.js$|\.jsx$/],
        loader: 'babel-loader',
        exclude: [nodeModulesPath],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.(css|pcss|scss)$/,
        // use: ExtractTextPlugin.extract({
        //   fallback: 'style-loader',
        //   use: ['css-loader', 'sass-loader'],
        //   exclude: /node_modules/
        // })
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings
          }, {
            loader: 'css-loader', // translates CSS into CommonJS
          }, {
            loader: 'sass-loader', // compiles Sass to CSS
          },
        ],
      }, {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?.*$|$)/,
        use: [
          {
            loader: 'file-loader', // Instructs webpack to emit the required object as file and to return its public URL
          },
        ],
      },
    ],
  },
  devServer: {
    open: true,
    openPage: 'public/',
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.NamedModulesPlugin(),
    new Webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom',
      axios: 'axios',
      _: 'lodash',
    }),
  ],
};

module.exports = config;
