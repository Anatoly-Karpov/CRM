const express = require('express');

const router = express.Router();
const { checkAdmin } = require('../middleware/allMiddleWare');

router.get('/', (req, res) => {
  res.render('index');
});

module.exports = router;
