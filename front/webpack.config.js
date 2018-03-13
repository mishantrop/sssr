const config = {
  // entry: ['babel-polyfill', './src/js/bundle.js'],
  entry: ['./src/js/bundle.js'],
  target: 'web',
  output: {
    path: './dist/',
    filename: 'bundle.js',
  },

  devServer: {
    historyApiFallback: true,
    inline: true,
    port: 8080,
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',

        query: {
          presets: ['es2015', 'stage-2', 'react'],
        },
      },
    ],
  },
};

module.exports = config;
