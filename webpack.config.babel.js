/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import path from 'path';

const plugins = [
  new ExtractTextPlugin('main.css'),
  new HtmlWebpackPlugin({
    template: './src/templates/index.hbs',
    favicon: './src/images/favicon.png',
  }),
];

if (process.env.NODE_ENV === 'production') {
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: { warnings: false },
    output: { comments: false },
  }));
  plugins.push(new CopyWebpackPlugin([
    { from: './src/CNAME' },
  ]));
}

module.exports = {
  entry: path.join(__dirname, 'src/scripts/main.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.js',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.css', '.scss'],
    alias: {
      leafletCSS: path.join(__dirname, '/node_modules/leaflet/dist/leaflet.css'),
    },
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader'],
        }),
      },
      {
        test: /\.(jpg|jpeg|gif|png|ico|svg)$/,
        exclude: /node_modules/,
        loader: 'file-loader',
      },
      {
        test: /\.(eot|ttf|otf|woff|woff2)$/,
        exclude: /node_modules/,
        loader: 'file-loader',
      },
    ],
  },
  plugins,
  devServer: {
    contentBase: 'dist/',
    port: 9000,
    hot: true,
    host: '0.0.0.0',
    stats: {
      colors: true,
    },
  },
};
