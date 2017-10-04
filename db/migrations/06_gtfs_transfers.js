exports.up = knex => knex.schema.createTable('gtfs_transfers', (table) => {
  table.string('from_stop_id').notNullable(); // references stops.stop_id
  table.string('to_stop_id').notNullable(); // references stops.stop_id
  table.string('transfer_type').notNullable(); // {0, 1, 2, 3}
  table.integer('min_transfer_time'); // seconds, non-negatvive integer
});

exports.down = knex => knex.schema.dropTable('gtfs_transfers');
