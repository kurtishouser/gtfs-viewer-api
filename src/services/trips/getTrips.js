const knex = require('../../../knex.js');

const { camelizeKeys } = require('humps');

function getTrips() {
  return knex('gtfs_trips')
    .distinct(knex.raw('ON (route_short_name, route_long_name, trip_headsign, service_id, direction_id) route_short_name, route_long_name, gtfs_trips.route_id, trip_headsign, service_id, direction_id, shape_id'))
    .join('gtfs_routes', 'gtfs_routes.route_id', '=', 'gtfs_trips.route_id')
    .orderBy('route_short_name')
    .orderBy('route_long_name')
    .orderBy('trip_headsign')
    .orderBy('service_id')
    .orderBy('direction_id')
    .then(result => camelizeKeys(result))
    .catch(err => new Error(err));
}

module.exports = getTrips;
