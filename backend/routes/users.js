const express = require('express');
const router = express.Router();
const fs = require('fs');
const file = './backend/data.json';

router.post('/', (req, res) => {
  const { username, password } = req.body;
  const data = JSON.parse(fs.readFileSync(file));
  data.users.push({ username, password });
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  res.json({ message: 'User registered successfully!' });
});

module.exports = router;
