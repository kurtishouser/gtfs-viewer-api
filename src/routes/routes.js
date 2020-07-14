const express = require('express');
const byKey = require('natural-sort-by-key');

const getRoutes = require('../services/routes/getRoutes');

const router = express.Router();

router.get('/', (req, res) => {
  getRoutes()
    .then((routes) => {
      res.json(routes.length > 0 ? routes.sort(byKey('routeShortName')) : routes);
    });
});

module.exports = router;
