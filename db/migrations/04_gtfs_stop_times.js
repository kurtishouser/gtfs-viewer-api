exports.up = knex => knex.schema.createTable('gtfs_stop_times', (table) => {
  table.string('trip_id').notNullable();
  table.string('arrival_time').notNullable(); // HH:MM:SS local time
  table.string('departure_time').notNullable(); // HH:MM:SS local time
  table.string('stop_id').notNullable(); // references stops.stop_id
  table.integer('stop_sequence').notNullable();
  table.string('stop_headsign');
  table.integer('pickup_type').defaultTo(0); // {0, 1, 2, 3}
  table.integer('dropoff_type').defaultTo(0); // {0, 1, 2, 3}
  table.decimal('shape_dist_traveled');
  table.integer('timepoint'); // {null, 0, 1}
});

exports.down = knex => knex.schema.dropTable('gtfs_stop_times');
