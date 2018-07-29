const { Router } = require('express');
const fs = require('fs')

const cards = require('./JSON/cards.json');
const campaigns = require('./JSON/campaigns.json');

const router = new Router();

router.get('/cards', (req, res) => {
  res.json(cards);
});

router.get('/cards/:campaignId', (req, res) => {
  const { campaignId } = req.params;
  const data = cards.filter(dataObj => dataObj.cardTitle === campaignId);
  res.json(data);
});

router.post('/:title/:state', (req, res) => {
  const { title, state } = req.params;

  const data = cards.map(dataObj => {
    if (dataObj.cardTitle === title) {
      
      dataObj.currentWorkflow = state;
    }
  });
  const content = JSON.stringify(data)
  fs.writeFile('./JSON/cards.json', JSON.stringify(data), 'utf8', (err) => {
    if (err) {
      return console.log(err)
    }
  })
  res.json(cards);
});

router.get('/campaigns', (req, res) => {
  res.json(campaigns);
});

module.exports = router;
