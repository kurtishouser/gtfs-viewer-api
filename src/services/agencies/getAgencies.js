const knex = require('../../../knex.js');

const { camelizeKeys } = require('humps');

function getAgencies() {
  return knex('gtfs_agencies')
    .then(result => camelizeKeys(result))
    .catch(err => new Error(err));
}

module.exports = getAgencies;
