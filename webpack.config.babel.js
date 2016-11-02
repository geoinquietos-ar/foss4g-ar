/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const plugins = [
  new ExtractTextPlugin('main.css'),
  new HtmlWebpackPlugin({
    title: 'FOSS4G+SOTM Argentina 2017',
  }),
];

if (process.env.NODE_ENV === 'production') {
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
    },
    output: {
      comments: false,
    },
  }));
}

module.exports = {
  entry: './src/scripts/main.js',
  output: {
    path: './dist',
    filename: 'main.js',
  },
  devtool: 'source-map',
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
        loader: ExtractTextPlugin.extract(['css?sourceMap', 'sass?sourceMap']),
      },
      {
        test: /\.(jpg|jpeg|gif|png|ico)$/,
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
    stats: {
      colors: true,
    },
  },
};
