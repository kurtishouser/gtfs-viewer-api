const knex = require('../../../knex.js');

const { camelizeKeys } = require('humps');

function getDirections() {
  return knex('gtfs_trips')
    .distinct('direction_id')
    .orderBy('direction_id')
    .then(result => camelizeKeys(result));
}

module.exports = getDirections;
