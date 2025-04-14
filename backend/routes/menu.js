const express = require('express');
const router = express.Router();
const fs = require('fs');
const file = './backend/data.json';

router.get('/', (req, res) => {
  const data = JSON.parse(fs.readFileSync(file));
  res.json(data.menu);
});

router.post('/', (req, res) => {
  const { name, price } = req.body;
  const data = JSON.parse(fs.readFileSync(file));
  data.menu.push({ name, price });
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  res.json({ message: 'Menu item added!' });
});

module.exports = router;
