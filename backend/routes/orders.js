const express = require('express');
const router = express.Router();
const fs = require('fs');
const file = './backend/data.json';

router.get('/', (req, res) => {
  const data = JSON.parse(fs.readFileSync(file));
  res.json(data.orders);
});

router.post('/', (req, res) => {
  const { username, items } = req.body;
  const data = JSON.parse(fs.readFileSync(file));
  data.orders.push({ username, items });
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  res.json({ message: 'Order placed successfully!' });
});

module.exports = router;
