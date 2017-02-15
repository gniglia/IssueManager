import path from 'path';
import express from 'express';
import http from 'http';
import socket from 'socket.io';

const app = express();
const server = http.Server(app);
const io = socket(server);

const port = (process.env.PORT || 8080)

const indexPath = path.join(__dirname, 'src', 'index.html');
const publicPath = express.static(path.join(__dirname, '../public'));

app.use('/public', publicPath);

if (process.env.NODE_ENV !== 'production') {
  import webpack from 'webpack'
  import webpackDevMiddleware from 'webpack-dev-middleware'
  import webpackHotMiddleware from 'webpack-hot-middleware'
  import config from './config/webpack.dev.config';
  const compiler = webpack(config)

  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    hot: true,
  	historyApiFallback: true
  }))
  app.use(webpackHotMiddleware(compiler))
}

app.get('/*', (req, res) => {
  res.sendFile(indexPath);
});

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('cardAdded', (data) => {
    socket.broadcast.emit('server:cardAdded', { card: data.card });
  });

  socket.on('cardUpdated', (data) => {
    socket.broadcast.emit('server:cardUpdated', { card: data.card });
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(port, error => {
  if (error) {
    console.error(error);
  } else {
    console.info(
      `Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
  }
});
