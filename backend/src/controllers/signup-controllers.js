import db from '../database/database-connection.js';
import bcrypt from 'bcrypt';
import { randomUser } from '../database/database-seeding/utils/fake-data-generators.js';
import { insertUser } from '../database/database-seeding/utils/sql-queries.js';
import checkIfUserEmailInDB from '../utils/check-if-user-in-DB.js';

const postSignupController = async (req, res) => {
  const { email, password } = req.body;

  const userAlreadyInDB = await checkIfUserEmailInDB(email);

  if (userAlreadyInDB) {
    console.log('user already in DB');
    res
      .status(200)
      .send({ message: 'Email already taken please try a different email.' });
    return false;
  } else {
    try {
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(password, salt);
      const user = { ...randomUser(), ...req.body, password: hashedPassword };

      await db.execute(insertUser(user));
    } catch (err) {
      console.log(err);
    }
    res.send({
      message: 'Registrations successfull, please login with your credentials.',
    });
    return true;
  }
};

export default postSignupController;
