const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

const ENV = require('./env');
const PATHS = {
  src: path.join(__dirname, 'src'),
  test: path.join(__dirname, 'test'),
  build: path.join(__dirname, 'www'),
};

const entry = ENV == 'test' ? PATHS.test : PATHS.src
const outputFilename = ENV == 'test' ? 'bundle.test.js' : 'bundle.app.js'

process.env.BABEL_ENV = ENV;

const common = {
  entry: entry,
  output: {
    path: PATHS.build,
    filename: outputFilename,
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css?url=false'],
        // include: entry,
      },
      {
        test: /\.jsx?$/,
        loader: 'babel?cacheDirectory',
        // include: entry,
      }
    ]
  }
};

if (ENV === 'development') {
  module.exports = merge(common, {
    devServer: {
      contentBase: PATHS.build,

      // Enable history API fallback so HTML5 History API based
      // routing works. This is a good default that will come
      // in handy in more complicated setups.
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,

      // filename: "./www/bundle.app.js",

      // Display only errors to reduce the amount of output.
      stats: 'errors-only',

      // Parse host and port from env so this is easy to customize.
      host: process.env.HOST,
      port: process.env.PORT,
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ],
  });
} else {
  // config can be added here for minifying / etc
  module.exports = merge(common, {});
}
