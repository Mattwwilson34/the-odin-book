import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import createHttpError from 'http-errors';
import connectToDB from './database.js';

const app = express();

// DB connection
const dbConnection = connectToDB();

dbConnection.query('SHOW tables', function (err, results, fields) {
  console.log(results); // results contains rows returned by server
});

// MIDDLEWARE
app.use(cors());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.json({ message: 'You hit the backend home route!' });
});

export default app;
