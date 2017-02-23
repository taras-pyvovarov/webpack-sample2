const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, './src'),
  
  entry: {
    //Separate 'vendor' bundle for listed node modules
    vendor: ['moment'],

    //Bundle with key 'app'
    app: ['./home.js', './app.js'],

    //Bundle with key 'vendor'
    part1: './part1.js',

    //Bundle with key 'contact'
    contact: './contact.js',
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },

  plugins: [
    //Describe vendor bundle
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js'
    }),
  ],
};