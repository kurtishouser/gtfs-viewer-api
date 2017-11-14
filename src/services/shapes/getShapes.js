const knex = require('../../../knex.js');

const { camelizeKeys } = require('humps');

function getShapes() {
  // raw sql for now, refactor to knex(...) later
  return knex.raw('select distinct on (route_id, shapes.shape_id) \
    shapes.shape_id, route_id, coordinates, points \
    from ( \
      select shape_id, \
        array_agg(array[shape_pt_lon, shape_pt_lat]) as coordinates, \
        array_length(array_agg(array[shape_pt_lon, shape_pt_lat]), 1) as points \
        from (select * from gtfs_shapes order by shape_id, shape_pt_sequence) as s \
      where shape_id in ( \
        select distinct shape_id \
        from gtfs_trips \
        order by shape_id \
      ) \
      group by shape_id \
    ) as shapes \
    join gtfs_trips on shapes.shape_id = gtfs_trips.shape_id \
    order by shapes.shape_id')
    .then(shapes => camelizeKeys(shapes.rows))
    .catch(err => new Error(err));
}

module.exports = getShapes;

// 21 Hayes - inbound, outbound
// where shape_id = \'147591\' or shape_id = \'147589\' \

/* PREVIOUS / INTERIM VERSIONS - will delete later
      where (service_id = \'1\' or service_id = \'1\') \
return knex.raw('select shape_id, array_agg(array[shape_pt_lon, shape_pt_lat]) as coordinates \
  from gtfs_shapes \
  where shape_id in ( \
    select distinct on (shape_id, service_id, direction_id) shape_id \
    from gtfs_trips \
    where (service_id = \'2\' or service_id = \'3\') \
    order by shape_id \
  ) \
  group by shape_id')

*/
