exports.up = knex => knex.schema.table('gtfs_stop_times', table => {
  // fix
  // conditionally required
  table.string('arrival_time').nullable().alter();
  table.string('departure_time').nullable().alter();
  // new columns
  table.integer('continuous_pickup', 1); // {0, 1, 2, 3}
  table.integer('continuous_drop_off', 1); // {0, 1, 2, 3}
});

exports.down = knex => knex.schema.table('gtfs_stop_times', table => {
  table.string('arrival_time').notNullable().alter();
  table.string('departure_time').notNullable().alter();
  table.dropColumn('continuous_pickup');
  table.dropColumn('continuous_drop_off');
});
