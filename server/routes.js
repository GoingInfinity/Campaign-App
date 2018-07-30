const { Router } = require('express');
const fs = require('fs');

const cards = require('./JSON/cards.json');
const campaigns = require('./JSON/campaigns.json');

const router = new Router();

// Retrieve card data
router.get('/cards', (req, res) => {
  res.json(cards);
});

// Filter Card list by ID
router.get('/cards/:campaignId', (req, res) => {
  const { campaignId } = req.params;
  const data = cards.filter(dataObj => dataObj.cardTitle === campaignId);
  res.json(data);
});

// Update card status
router.post('/:title/:state', (req, res) => {
  const { title, state } = req.params;

  // eslint-disable-next-line array-callback-return
  const data = cards.map(dataObj => {
    if (dataObj.cardTitle === title) {
      // eslint-disable-next-line
      dataObj.currentWorkflow = state;
    }
  });

  // Write to JSON file
  // eslint-disable-next-line consistent-return
  fs.writeFile('./JSON/cards.json', JSON.stringify(data), 'utf8', (err) => {
    if (err) {
      // eslint-disable-next-line no-console
      return console.log(err);
    }
  });
  res.json(cards);
});

router.get('/campaigns', (req, res) => {
  res.json(campaigns);
});

module.exports = router;
