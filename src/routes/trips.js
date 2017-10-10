const express = require('express');

const getTrips = require('../services/trips/getTrips');

const router = express.Router();

router.get('/', (req, res) => {
  getTrips()
    .then((trips) => {
      res.json(trips);
    })
    .catch(err => err);
});

module.exports = router;
