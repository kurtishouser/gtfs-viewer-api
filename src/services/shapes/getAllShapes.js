const knex = require('../../../knex.js');

const { camelizeKeys } = require('humps');

function getShapes() {
  return knex.raw(`
    select shape_id, array_agg(array[shape_pt_lon, shape_pt_lat] order by shape_id, shape_pt_sequence) as coordinates
    from gtfs_shapes
    group by shape_id 
    order by shape_id
    `)
    .then(shapes => camelizeKeys(shapes.rows))
    .catch(err => new Error(err));
}

module.exports = getShapes;
