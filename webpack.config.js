var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: [
    './modules/main.js',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server'
  ],
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    root: [path.join(__dirname, "node_modules")]
  },
  resolveLoader: { root: path.join(__dirname, "node_modules") },
  plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      // new webpack.ResolverPlugin(
      //     new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
      // )
  ],
  module: {
    loaders: [
      { test: /\.js$/, loader: 'react-hot!babel-loader', include: [path.join(__dirname, 'modules')]},
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader!autoprefixer-loader' }, // use ! to chain loaders
      { test: /\.css$/, loader: 'style-loader!css-loader!autoprefixer-loader' },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' } // inline base64 URLs for <=8k images, direct URLs for the rest
    ]
  }
};