const knex = require('../../../knex.js');

const { camelizeKeys } = require('humps');

function getRoutes() {
  return knex('gtfs_routes')
    .then(result => camelizeKeys(result))
    .catch(err => new Error(err));
}

module.exports = getRoutes;
