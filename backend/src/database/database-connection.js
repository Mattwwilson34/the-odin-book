import * as dotenv from 'dotenv';
import mysql from 'mysql2';

dotenv.config({
  path: '/Users/matthewwilson/Desktop/Coding/the-odin-project/the-odin-book/backend/.env',
});

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  socketPath: process.env.DB_SOCKET_PATH,
};

const connectToDB = () => {
  try {
    const dbConnection = mysql.createConnection(dbConfig);
    console.log('========================================');
    console.log(`Successful connection to ${dbConfig.database}.`);
    console.log('========================================');
    return dbConnection;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export default connectToDB;
