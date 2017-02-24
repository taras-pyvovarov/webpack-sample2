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

  module: {
    rules: [
      //CSS compilation rule
      {
        //For all css files...
        test: /\.css$/,
        //Use css loader (handles css files in import) and then style loader (writes your styles to the <head>)
        use: ['style-loader', 'css-loader'],
      },

      //Babel js compilation rule
      {
        //For all js files...
        test: /\.js$/,
        //Except node_modules folder...
        exclude: [/node_modules/],
        use: [{
          //Use babel leader...
          loader: 'babel-loader',
          //With options...
          options: { presets: ['es2015'] }
        }],
      },

      // Loaders for other file types can go here
    ],
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