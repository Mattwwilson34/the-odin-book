import * as dotenv from 'dotenv';
import mysql from 'mysql2';
import dbConfig from '../config/database-configs.js';

dotenv.config({
  path: '/Users/matthewwilson/Desktop/Coding/the-odin-project/the-odin-book/backend/.env',
});

const connectToDB = () => {
  try {
    const dbConnection = mysql.createPool(dbConfig);
    console.log('=================================================');
    console.log(`Successful connection to ${dbConfig.database} database.`);
    console.log('=================================================');
    return dbConnection;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export default connectToDB;
