const express = require('express');

const getServices = require('../services/services/getServices');

const router = express.Router();

router.get('/', (req, res) => {
  getServices()
    .then((services) => {
      res.json(services);
    });
});

module.exports = router;
