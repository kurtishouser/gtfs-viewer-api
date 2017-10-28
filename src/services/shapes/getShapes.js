const knex = require('../../../knex.js');

const { camelizeKeys } = require('humps');

function getShapes() {
  return knex.raw('select shape_id, array_agg(array[shape_pt_lon, shape_pt_lat]) as coordinates \
from gtfs_shapes \
where shape_id in ( \
	select distinct on (shape_id, service_id, direction_id) shape_id \
	from gtfs_trips \
  where (service_id = \'2\' or service_id = \'3\') \
	order by shape_id \
) \
group by shape_id')
    .then(shapes => camelizeKeys(shapes.rows))
    .catch(err => new Error(err));
}

module.exports = getShapes;

// where shape_id = \'147591\' or shape_id = \'147589\' \
