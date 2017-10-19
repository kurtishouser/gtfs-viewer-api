const knex = require('../../../knex.js');

const { camelizeKeys } = require('humps');

function getShapeByRouteId(id) {
  return knex('gtfs_trips')
    .distinct(knex.raw('ON (trip_headsign) shape_id'))
    .where('route_id', id)
    .where('service_id', '1') // limit to 1 (weekdays) for now
    .where('direction_id', '1') // limit to 1 (inbound) for now
    .then(shapeIds => knex('gtfs_shapes')
      .where('shape_id', shapeIds[0].shape_id)
      .then(result => camelizeKeys(result))
      .catch(err => new Error(err)))
    .catch(err => new Error(err));
}

module.exports = getShapeByRouteId;
