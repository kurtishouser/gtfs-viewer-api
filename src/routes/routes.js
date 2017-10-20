const express = require('express');

const getRoutes = require('../services/routes/getRoutes');

const router = express.Router();

router.get('/', (req, res) => {
  getRoutes()
    .then((routes) => {
      res.json(routes);
    });
});

module.exports = router;
