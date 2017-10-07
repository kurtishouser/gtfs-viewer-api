const knex = require('../../../knex.js');

const { camelizeKeys } = require('humps');

function getAgencyById(id) {
  return knex('gtfs_agencies')
    .whereRaw('LOWER(agency_id) = ?', [id.toLowerCase()])
    .first()
    .then(result => camelizeKeys(result))
    .catch(err => new Error(err));
}

module.exports = getAgencyById;
