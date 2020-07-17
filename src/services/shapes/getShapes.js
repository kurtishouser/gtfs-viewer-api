const knex = require('../../../knex.js');

const { camelizeKeys } = require('humps');

function getShapes() {
  // raw sql for now, refactor to knex(...) later
  return knex.raw(`
    select distinct on (route_id, shapes.shape_id)
      route_id, shapes.shape_id, coordinates
    from (
      select shape_id,
        array_agg(array[shape_pt_lon, shape_pt_lat] order by shape_id, shape_pt_sequence) as coordinates
      from gtfs_shapes
      where shape_id in (
        select distinct shape_id
        from gtfs_trips
        order by shape_id
      )
      group by shape_id
    ) as shapes
    join gtfs_trips on shapes.shape_id = gtfs_trips.shape_id
    order by route_id, shapes.shape_id
    `)
    .then(shapes => camelizeKeys(shapes.rows))
    .catch(err => new Error(err));
}

module.exports = getShapes;
