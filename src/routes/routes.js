const express = require('express');
const byKey = require('natural-sort-by-key');

const getRoutes = require('../services/routes/getRoutes');

const router = express.Router();

router.get('/', (req, res) => {
  getRoutes()
    .then((routes) => {
      routes.sort(byKey('routeShortName'));
      res.json(routes);
    });
});

module.exports = router;
