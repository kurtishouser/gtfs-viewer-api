const express = require('express');
const fs = require('fs');

const getShapeById = require('../services/shapes/getShapeById');
const getShapeByRouteId = require('../services/shapes/getShapeByRouteId');

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

      // res.json({
      //   shapeId: req.params.id,
      //   distance: shape[shape.length - 1].shapeDistTraveled,
      //   coordinates: shape.map(point =>
      //     [parseFloat(point.shapePtLon), parseFloat(point.shapePtLat)]),
      // });
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
