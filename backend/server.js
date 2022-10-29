import app from './app.js';
import * as dotenv from 'dotenv';

dotenv.config();

const SERVER_PORT = process.env.PORT;

const MESSAGE = `The Odin Book server is is listening on port:${SERVER_PORT}`;

app.listen(SERVER_PORT, () => {
  console.log('=================================================');
  console.log(MESSAGE);
  console.log('=================================================');
});
