const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('../webpack.dev.config');

const server = new WebpackDevServer({ ...config.devServer }, webpack(config));

server.listen(9000, 'localhost', (err) => {
  if (err) {
    return;
  }
  if (process.send) {
    process.send('ok');
  }
});
