import express from 'express';
import cors from 'cors';
import routes from '../routes';
import bodyParser from 'body-parser';

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use('/api', routes);

export default app;
