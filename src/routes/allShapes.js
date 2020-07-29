const express = require('express');
const fs = require('fs');

const getAllShapes = require('../services/shapes/getAllShapes');

const router = express.Router();

router.get('/', (req, res) => {
  getAllShapes()
    .then((shapes) => {
      return res.json(shapes);
    });
});

module.exports = router;
