// server.js
const express = require('express');
const app = express();
const port = 3000;

// Average egg price per dozen for each U.S. state (sample data)
const eggPrices = [
  { state: 'Alabama', price: 4.99 },
  { state: 'Alaska', price: 5.75 },
  { state: 'Arizona', price: 4.89 },
  { state: 'Arkansas', price: 4.65 },
  { state: 'California', price: 5.85 },
  { state: 'Colorado', price: 4.95 },
  { state: 'Connecticut', price: 5.70 },
  { state: 'Delaware', price: 5.10 },
  { state: 'Florida', price: 4.85 },
  { state: 'Georgia', price: 4.80 },
  { state: 'Hawaii', price: 6.60 },
  { state: 'Idaho', price: 4.30 },
  { state: 'Illinois', price: 5.20 },
  { state: 'Indiana', price: 4.85 },
  { state: 'Iowa', price: 4.50 },
  { state: 'Kansas', price: 4.55 },
  { state: 'Kentucky', price: 4.75 },
  { state: 'Louisiana', price: 5.10 },
  { state: 'Maine', price: 5.50 },
  { state: 'Maryland', price: 5.15 },
  { state: 'Massachusetts', price: 5.55 },
  { state: 'Michigan', price: 4.90 },
  { state: 'Minnesota', price: 4.60 },
  { state: 'Mississippi', price: 4.70 },
  { state: 'Missouri', price: 4.82 },
  { state: 'Montana', price: 4.35 },
  { state: 'Nebraska', price: 4.40 },
  { state: 'Nevada', price: 4.95 },
  { state: 'New Hampshire', price: 5.25 },
  { state: 'New Jersey', price: 5.45 },
  { state: 'New Mexico', price: 4.88 },
  { state: 'New York', price: 5.60 },
  { state: 'North Carolina', price: 4.92 },
  { state: 'North Dakota', price: 4.45 },
  { state: 'Ohio', price: 4.80 },
  { state: 'Oklahoma', price: 4.95 },
  { state: 'Oregon', price: 5.40 },
  { state: 'Pennsylvania', price: 4.95 },
  { state: 'Rhode Island', price: 5.70 },
  { state: 'South Carolina', price: 4.85 },
  { state: 'South Dakota', price: 4.50 },
  { state: 'Tennessee', price: 4.88 },
  { state: 'Texas', price: 4.60 },
  { state: 'Utah', price: 4.50 },
  { state: 'Vermont', price: 5.75 },
  { state: 'Virginia', price: 4.90 },
  { state: 'Washington', price: 5.30 },
  { state: 'West Virginia', price: 4.80 },
  { state: 'Wisconsin', price: 4.60 },
  { state: 'Wyoming', price: 4.55 }
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
