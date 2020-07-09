const knex = require('../../../knex.js');

const { camelizeKeys } = require('humps');

function getServices() {
  return knex('gtfs_calendar')
    .orderBy('start_date')
    .orderBy('service_id')
    .then(result => camelizeKeys(result));
}

module.exports = getServices;
