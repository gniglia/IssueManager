import path from 'path';
import express from 'express';
import config from './config/webpack.dev.config'

const app = new express();
const port = 8080;

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  hot: true,
	historyApiFallback: true
}))
app.use(webpackHotMiddleware(compiler))

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.listen(port, error => {
  if (error) {
    console.error(error);
  } else {
    console.info(
      `Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
  }
});
