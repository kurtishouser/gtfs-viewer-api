exports.up = knex => knex.schema.table('gtfs_fare_attributes', table => {
  // fix
  // change type
  table.integer('transfer_duration').alter();
});

exports.down = knex => knex.schema.table('gtfs_fare_attributes', table => {
  table.string('transfer_duration').alter();
});
