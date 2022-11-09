import express from 'express';

const router = express.Router();

// Login route
router.get('/', (req, res) => {
  res.send('You hit the login route');
});

export default router;
