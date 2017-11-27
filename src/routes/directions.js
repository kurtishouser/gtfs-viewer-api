const express = require('express');

const getDirections = require('../services/directions/getDirections');

const router = express.Router();

router.get('/', (req, res) => {
  getDirections()
    .then((directions) => {
      const directionIds = directions.map(direction => direction.directionId);
      res.json(directionIds);
    });
});

module.exports = router;
