exports.up = knex => knex.schema.createTable('gtfs_agencies', (table) => {
  table.string('agency_id'); // dataset unique
  table.string('agency_name').notNullable();
  table.string('agency_url').notNullable();
  table.string('agency_timezone').notNullable(); // valid values: http://en.wikipedia.org/wiki/List_of_tz_zones
  table.string('agency_lang', 2); // two-letter ISO 639-1
  table.string('agency_phone');
  table.string('agency_fare_url');
  table.string('agency_email');
});

exports.down = knex => knex.schema.dropTable('gtfs_agencies');
