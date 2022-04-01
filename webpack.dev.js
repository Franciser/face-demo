const merge = require('webpack-merge');
const base = require('./webpack.base.js');
const path = require('path');

module.exports = merge(base, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    hot: true,
    open: true,
    // host: 'localhost',
    host: '192.168.0.190',
    port: 8080,
  }
});
