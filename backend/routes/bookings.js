const express = require('express');
const router = express.Router();
const fs = require('fs');
const file = './backend/data.json';

router.get('/', (req, res) => {
  const data = JSON.parse(fs.readFileSync(file));
  res.json(data.bookings);
});

router.post('/', (req, res) => {
  const { name, date, time, guests } = req.body;
  const data = JSON.parse(fs.readFileSync(file));
  data.bookings.push({ name, date, time, guests });
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  res.json({ message: 'Booking successful!' });
});

module.exports = router;
