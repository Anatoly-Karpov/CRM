const express = require('express');

const router = express.Router();
const sha256 = require('sha256');

const { User, Order } = require('../db/models');

const { helloMiddleware } = require('../middleware/allMiddleWare');

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
      res.locals.admin = true;
      return res.sendStatus(200);
    }
  } else {
    if (user.password === sha256(password)) {
      req.session.name = user.name;
      req.session.user_id = user.id;
      req.session.role_id = user.roleId;
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

// отрисовка страницы
router.get('/', async (req, res) => {
  const allOrders = await Order.findAll({ raw: true });

  res.render('workerPage', { allOrders });
});

router.get('/profile', async (req, res) => {
  const user = await User.findOne({ where: { id: req.session.user_id } });
  res.render('workerProfile', { user: user.dataValues });
});

module.exports = router;
