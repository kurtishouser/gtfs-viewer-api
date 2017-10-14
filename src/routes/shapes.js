const express = require('express');
const fs = require('fs');

const getShapeById = require('../services/shapes/getShapeById');

const router = express.Router();

router.get('/:id', (req, res) => {
  getShapeById(req.params.id)
    .then((shape) => {
      const geoJson = {
        type: 'Feature',
        properties: {
          shapeId: req.params.id,
          distance: shape[shape.length - 1].shapeDistTraveled,
        },
        geometry: {
          type: 'LineString',
          coordinates: shape.map(point =>
            [parseFloat(point.shapePtLon), parseFloat(point.shapePtLat)]),
        },
      };
      res.json(geoJson);
    })
    .catch(err => err);
});

module.exports = router;
