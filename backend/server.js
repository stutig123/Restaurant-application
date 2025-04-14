const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const usersRoute = require('./routes/users');
const menuRoute = require('./routes/menu');
const ordersRoute = require('./routes/orders');
const bookingsRoute = require('./routes/bookings');

app.use('/api/users', usersRoute);
app.use('/api/menu', menuRoute);
app.use('/api/orders', ordersRoute);
app.use('/api/bookings', bookingsRoute);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
