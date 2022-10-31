import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
// import createHttpError from 'http-errors';

const app = express();

// MIDDLEWARE
app.use(cors());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.json({ message: 'You hit the backend home route!' });
});

export default app;
