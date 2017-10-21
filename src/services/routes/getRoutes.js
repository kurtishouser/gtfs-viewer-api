const knex = require('../../../knex.js');

const { camelizeKeys } = require('humps');

function getRoutes() {
  // raw sql for now, refactor to knex(...) later
  return knex.raw('select route_id, route_short_name, route_long_name, route_type, array_agg(service_id) as service_ids \
    from ( \
      select distinct on (r.route_id, route_short_name, route_long_name, service_id) \
      r.route_id, route_short_name, route_long_name, route_type, service_id \
      from gtfs_routes r \
      join gtfs_trips t on r.route_id = t.route_id \
      order by route_short_name, route_long_name, service_id \
    ) as s \
    group by route_short_name, route_long_name, route_id, route_type')
    .then(routes => camelizeKeys(routes.rows))
    .catch(err => new Error(err));
}

module.exports = getRoutes;


/* PREVIOUS / INTERIM VERSIONS

return knex('gtfs_routes')
  .orderBy('route_short_name')
  .then(result => camelizeKeys(result))
  .catch(err => new Error(err));

return knex('gtfs_routes')
  // .distinct(knex.raw('ON (route_short_name, route_long_name, service_id, direction_id)
  // gtfs_trips.route_id, route_short_name, route_long_name, service_id, direction_id, shape_id'))
  .distinct(knex.raw('ON (route_short_name, route_long_name, service_id)
    gtfs_trips.route_id, route_short_name, route_long_name, service_id'))
  .join('gtfs_trips', 'gtfs_routes.route_id', 'gtfs_trips.route_id')
  //.whereIn('gtfs_routes.route_id', ['12302', '12337'])
  .orderBy('route_short_name')
  .orderBy('route_long_name')
  .orderBy('service_id')
  .orderBy('direction_id')
  .then(result => camelizeKeys(result))
  .catch(err => new Error(err));
*/
