const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    //Bundle with key 'app'
    app: ['./home.js', './app.js'],

    //Bundle with key 'vendor'
    vendor: './vendor.js',

    //Bundle with key 'contact'
    contact: './contact.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
};