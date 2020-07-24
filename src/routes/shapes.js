const express = require('express');
const fs = require('fs');

const getShapes = require('../services/shapes/getShapes');
const getShapeById = require('../services/shapes/getShapeById');
const getShapeByRouteId = require('../services/shapes/getShapeByRouteId');

const router = express.Router();

router.get('/', (req, res) => {
  getShapes()
    .then((shapes) => {
      res.json(shapes);
    });
});

router.get('/:id', (req, res) => {
  getShapeById(req.params.id)
    .then(shape => {
      const result = shape.length > 0
        ? {
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
        }
        : shape;

      return res.json(result);
    })
    .catch(err => err);
});

router.get('/route/:id', (req, res) => {
  getShapeByRouteId(req.params.id)
    .then((shape) => {
      res.send({
        routeId: req.params.id,
        shapeId: shape[0].shapeId,
        distance: shape[shape.length - 1].shapeDistTraveled,
        coordinates: shape.map(point =>
          [parseFloat(point.shapePtLon), parseFloat(point.shapePtLat)]),
      });
    })
    .catch(err => err);
});

module.exports = router;
