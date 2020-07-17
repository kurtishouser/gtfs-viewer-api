const knex = require('../../../knex.js');

const { camelizeKeys } = require('humps');

function getShapeByRouteId(id) {
	return knex.raw(`
		select shape_id, array_length(array_agg(array[shape_pt_lon, shape_pt_lat]), 1) as points
		from gtfs_shapes
		where shape_id in (
			select distinct on (shape_id, trip_headsign, service_id, direction_id) shape_id
			from gtfs_trips
			where route_id = '${id}' and service_id = '1' and direction_id = '1'
			order by shape_id
		)
		group by shape_id
		order by points desc limit 1
		`)
    .then(shape => knex('gtfs_shapes').where('shape_id', shape.rows[0].shape_id))
    .then(result => camelizeKeys(result))
    .catch(err => new Error(err));
}

module.exports = getShapeByRouteId;
