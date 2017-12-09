const express = require('express');

const getTypes = require('../services/types/getTypes');

const router = express.Router();

router.get('/', (req, res) => {
  getTypes()
    .then((types) => {
      const typeIds = types.map(type => type.routeType);
      res.json(typeIds);
    });
});

module.exports = router;
