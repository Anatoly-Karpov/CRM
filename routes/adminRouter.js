const express = require('express');

const router = express.Router();

const { Order, Workgroup, User } = require('../db/models');

router.get('/', async (req, res) => {
  const groupName = await Workgroup.findAll({ raw: true });
  res.render('adminPage', { groupName });
});

router.post('/', async (req, res) => {
  const { num, comments, wgId } = req.body;
  await Order.create({ num, comments, wgId });
  res.sendStatus(200);
});

// Назначение рабочему бригады
router.get('/assign', async (req, res) => {
  const user = await User.findAll({ raw: true });
  const groupName = await Workgroup.findAll({ raw: true });
  res.render('assignPage', { user, groupName });
});

// назначение бригады
router.put('/assign', async (req, res) => {
  const { wgNum, id } = req.body;
  const groupNum = await User.update({ workgroupId: wgNum }, { where: { id } });
  res.sendStatus(200);
});

module.exports = router;
