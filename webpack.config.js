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
    //Path where outputs are placed
    path: path.resolve(__dirname, './dist/assets'),
    filename: '[name].bundle.js',
    //Path in webpack web server where file will be available
    publicPath: '/assets',
  },

  devServer: {
    //This 'src' folder will be served in devserver to be available in localhost root
    contentBase: path.resolve(__dirname, './src'),
  },

  plugins: [
    //Describe vendor bundle
    new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.bundle.js'
        }),
  ],
};