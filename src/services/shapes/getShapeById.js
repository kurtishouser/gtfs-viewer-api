const knex = require('../../../knex.js');

const { camelizeKeys } = require('humps');

function getShapeById(id) {
  return knex('gtfs_shapes')
    .where('shape_id', id)
    .orderBy('shape_pt_sequence')
    .then(result => camelizeKeys(result))
    .catch(err => new Error(err));
}

module.exports = getShapeById;
