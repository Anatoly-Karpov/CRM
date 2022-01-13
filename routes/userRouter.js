const { resolveAny } = require('dns');
const express = require('express');

const router = express.Router();
const sha256 = require('sha256');

const { User } = require('../db/models');

const { helloMiddleware } = require('../middleware/allMiddleWare');

// create user
router.get('/register', (req, res) => {
  res.render('register');
});

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.create({ name, email, password: sha256(password) });
  req.session.name = user.name;
  req.session.user_id = user.id;
  res.redirect('/');
});

// login
router.get('/login', async (req, res) => {
  res.render('loginPage');
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  console.log(user);
  if (user) {
    if (user.password === sha256(password)) {
      console.log(user.id);
      req.session.name = user.name;
      req.session.user_id = user.id;
      console.log(req.session.user_id);
      return res.redirect('/');
    }
    return res.send('wrong password');
  }
  res.send('wrong login');
});

// logout
router.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('auth');
  res.redirect('/');
});

router.get('/:id', async (req, res) => {
  const user = await User.findByPk(req.params.id);
  // console.log('=>>>>>>>>>>>>>>>>>>>>>>>>>>', req.params.id);
  res.redirect('/');
});

module.exports = router;
