import express from 'express';
import passport from 'passport';
import chalk from 'chalk';

const router = express.Router();

const homePageURL = `http://localhost:3000`;

// MIDDLEWARE
const isLoggedIn = (req, res, next) => {
  console.log(chalk.blue('============================='));
  console.log(chalk.blue('IS LOGGED IN MIDDLEWARE'));
  console.log(chalk.blue('============================='));
  console.log(chalk.red('============================='));
  console.log({ reqdotuser: req.user });
  console.log(chalk.red('============================='));

  console.log(req.session);

  if (req.user) {
    next();
  } else {
    res.sendStatus(401);
  }
};

router.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/auth/login',
    failureRedirect: '/auth/failure',
  }),
);

router.get('/login', (req, res, next) => {
  console.log('redirect successful');
  res.sendStatus(201).redirect('http://localhost:3000/');
});

router.get('/logout', (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
    req.session.destroy();
    res.status(200).send('logged out');
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
