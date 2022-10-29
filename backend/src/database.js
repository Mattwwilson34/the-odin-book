import * as dotenv from 'dotenv';
import mysql from 'mysql2';

dotenv.config();

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  socketPath: process.env.DB_SOCKET_PATH,
};

console.log(dbConfig);

const connectToDB = () => {
  try {
    const dbConnection = mysql.createConnection(dbConfig);
    console.log('========================================');
    console.log(`Successful connection to MySQL database.`);
    console.log('========================================');
    return dbConnection;
  } catch (error) {
    console.log(error);
  }
};

export default connectToDB;
