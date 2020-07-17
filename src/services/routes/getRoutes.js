const knex = require('../../../knex.js');

const { camelizeKeys } = require('humps');

function getRoutes() {
  // raw sql for now, refactor to knex(...) later
	return knex.raw(`
		select route_id, route_short_name, route_long_name, route_color, route_text_color, route_type, json_object_agg(direction_id, service_ids) as route_shapes
		from (
			select route_id, route_short_name, route_long_name, route_color, route_text_color, route_type, direction_id, json_object_agg(service_id, shape_ids) as service_ids
			from (
				select route_id, route_short_name, route_long_name, route_color, route_text_color, route_type, direction_id, service_id, array_agg(shape_id order by shape_id) as shape_ids
				from (
					select distinct on (route_short_name, route_long_name, direction_id, service_id, shape_id)
						gtfs_trips.route_id, route_short_name, route_long_name, route_color, route_text_color, route_type, direction_id, service_id, shape_id
					from gtfs_routes
					join gtfs_trips on gtfs_routes.route_id = gtfs_trips.route_id
					where shape_id is not null
					order by route_short_name, route_long_name, direction_id, service_id, shape_id
				) as shapes
				group by route_id, route_short_name, route_long_name, route_color, route_text_color, route_type, direction_id, service_id
			) as services
			group by route_id, route_short_name, route_long_name, route_color, route_text_color, route_type, direction_id
			order by route_short_name, route_long_name, direction_id
		) as directions
		group by route_id, route_short_name, route_long_name, route_color, route_text_color, route_type
		order by route_short_name, route_long_name
		`)
    .then(routes => camelizeKeys(routes.rows))
    .catch(err => new Error(err));
}

module.exports = getRoutes;
