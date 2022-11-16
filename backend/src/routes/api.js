import express from 'express';
import db from '../database/database-connection.js';
import delay from '../database/database-seeding/utils/delay.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('<h1>You hit the API route</h1>');
});

router.get('/posts', async (req, res) => {
  let combinedData = [];

  const [posts] = await db.execute('SELECT * FROM user_post');

  for await (const post of posts) {
    //
    const userFields = ['profile_picture', 'first_name', 'last_name'];
    const [postUserInfo] = await db.execute(
      `SELECT ${userFields.join(',')} FROM users WHERE user_id = ?`,
      [post.user_id],
    );
    //
    postUserInfo.forEach((userInfo) => {
      const data = { ...post, userInfo };
      combinedData.push(data);
    });
  }

  res.json(combinedData);
});

export default router;
