const { resolveAny } = require('dns');
const express = require('express');

const router = express.Router();
const sha256 = require('sha256');

const { User } = require('../db/models');

const { helloMiddleware, checkAdmin } = require('../middleware/allMiddleWare');

// create user
router.get('/register', (req, res) => {
  res.render('register');
});

router.post('/register', async (req, res) => {
  const {
    name, email, password, roleId,
  } = req.body;
  const user = await User.create({
    name, email, password: sha256(password), roleId,
  });
  req.session.name = user.name;
  req.session.user_id = user.id;
  req.session.role_id = user.roleId;
  // const newUser = {
  //   name: user.name,
  //   email: user.email,

  // }

  res.sendStatus(200);
});

// login
router.get('/login', async (req, res) => {
  res.render('loginPage');
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });

  if (user.roleId === 1) {
    if (user.password === sha256(password)) {
      req.session.name = user.name;
      req.session.user_id = user.id;
      req.session.role_id = user.roleId;
      console.log('>>>>>>>>>>>>>>', req.session.user_id);
      return res.sendStatus(200);
    }
  } else {
    if (user.password === sha256(password)) {
      console.log(user.roleId);
      req.session.name = user.name;
      req.session.user_id = user.id;
      req.session.role_id = user.roleId;
      console.log(req.session.user_id);
      return res.sendStatus(201);
    }

    return res.sendStatus(400);

    // return res.sendStatus(401);
  }
});

// logout
router.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('auth');
  res.redirect('/');
});

router.get('/', async (req, res) => {
  const user = await User.findByPk(req.session.user_id);
  // console.log('=>>>>>>>>>>>>>>>>>>>>>>>>>>', req.params.id);
  res.render('workerPage');
});

module.exports = router;
