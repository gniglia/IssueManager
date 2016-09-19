import app from './config/express';
import config from './config/env';
import mongoose from 'mongoose';


mongoose.connect(config.default.db);
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${config.default.db}`);
});


app.listen(config.default.port, () => {
  console.log(`listening on port: ${config.default.port}...`);
});
