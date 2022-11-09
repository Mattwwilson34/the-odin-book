import express from 'express';
import passport from 'passport';

const router = express.Router();

// MIDDLEWARE
const isLoggedIn = (req, res, next) => {
  if (req.user) {
    console.log(req);
    next();
  } else {
    res.sendStatus(401);
  }
};

router.get('/login', (req, res) => {
  res.send('You hit the /auth/login route');
});

router.get('/logout', (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
    req.session.destroy();
    res.send('Logged out!');
  });
});

router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile'],
  }),
);

router.get(
  '/google/redirect',
  passport.authenticate('google', {
    successRedirect: '/auth/protected',
    failureRedirect: '/auth/failure',
  }),
);

router.get('/failure', (req, res) => {
  res.send('Failure!');
});

router.get('/protected', isLoggedIn, (req, res) => {
  res.send(`Hello ${req.user.displayName}`);
});

export default router;
