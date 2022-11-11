import express from 'express';
import passport from 'passport';

const router = express.Router();

// MIDDLEWARE
const isLoggedIn = (req, res, next) => {
  if (req.user) {
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
    res.redirect('http://localhost:3000');
  });
});

router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
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
  res.redirect('http://localhost:3000/login-success');
});

router.get('/user', isLoggedIn, (req, res) => {
  res.json(req.user);
});

export default router;
