// server.js
const express = require('express');
const app = express();
const port = 3000;

// Sample egg price data for each state
const eggPrices = [
  { state: 'Alabama', price: 6.12 },
  { state: 'Alaska', price: 4.61 },
  { state: 'Arizona', price: 6.03 },
  { state: 'Arkansas', price: 4.95 },
  { state: 'California', price: 6.05 },
  // ... include all other states
  { state: 'Wyoming', price: 5.84 }
];

// Serve static files from the 'public' directory
app.use(express.static('public'));

// API endpoint that returns the egg price data as JSON
app.get('/api/egg-prices', (req, res) => {
  res.json(eggPrices);
});

app.listen(port, () => {
  console.log(`Egg Price Tracker app listening at http://localhost:${port}`);
});
