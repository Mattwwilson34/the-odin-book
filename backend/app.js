import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import createHttpError from 'http-errors';
import connectToDB from './database.js';

const app = express();

// DB connection
const connection = connectToDB();

connection.query('SHOW tables', function (err, results, fields) {
  console.log(results); // results contains rows returned by server
});

// MIDDLEWARE
app.use(cors());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Hello World');
});

export default app;
