import { Server } from 'socket.io';
import * as dotenv from 'dotenv';
import app from './app.js';
import chalk from 'chalk';

dotenv.config();

const SERVER_PORT = process.env.PORT;

const MESSAGE = `The Odin Book server is is listening on port:${SERVER_PORT}`;

const server = app.listen(SERVER_PORT, () => {
  console.log('=================================================');
  console.log(MESSAGE);
  console.log('=================================================');
});

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log(chalk.yellow('==========================='));
  console.log(chalk.red.underline.bold(`SOCKET ID: ${socket.id}`));
  console.log(chalk.yellow('==========================='));

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});
