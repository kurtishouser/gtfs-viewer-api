exports.up = knex => knex.schema.createTable('gtfs_frequencies', (table) => {
  table.string('trip_id').notNullable(); // references trips.service_id
  table.string('start_time').notNullable(); // HH:MM:SS local time
  table.string('end_time').notNullable(); // HH:MM:SS local time
  table.integer('headway_secs').notNullable(); // seconds
  table.integer('exception_type'); // {0 (or empty), 1}
});

exports.down = knex => knex.schema.dropTable('gtfs_frequencies');
