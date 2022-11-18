import dbConfig from '../../../config/database-config-mysql.js';
import runSQLFile from './run-SQL-file.js';

const buildDatabaseSchema = async () => {
  //
  // Absolute path of SQL file
  const __dir =
    '/Users/matthewwilson/Desktop/Coding/the-odin-project/the-odin-book/backend/src/database/SQL';
  const file = '/the_odin_book_v2.sql';

  // Run sql file against database
  runSQLFile(dbConfig, `${__dir}${file}`);
};

export default buildDatabaseSchema;
