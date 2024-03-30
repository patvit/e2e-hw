const { merge } = require('webpack-merge');
const common = require('./webpack.common.config');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    port: 9000,
  },
  devtool: 'source-map',
});
