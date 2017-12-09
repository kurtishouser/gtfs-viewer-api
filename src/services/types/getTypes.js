const knex = require('../../../knex.js');

const { camelizeKeys } = require('humps');

function getTypes() {
  return knex('gtfs_routes')
    .distinct('route_type')
    .orderBy('route_type')
    .then(result => camelizeKeys(result));
}

module.exports = getTypes;
