const { Router } = require('express');
const express = require('express');
const path = require('path');
const bp = require('body-parser');
const cors = require('cors');
const session = require('express-session')

const PORT = 3000;
const app = express();

app.use(cors());
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, '../dist')));

// Base route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Controller routes
const controllerRoutes = require('./routes');

app.use('/', controllerRoutes);

// Start server
app.listen(PORT, async () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${PORT}...`);
});
