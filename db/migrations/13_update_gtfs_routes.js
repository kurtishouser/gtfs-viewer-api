exports.up = knex => knex.schema.table('gtfs_routes', table => {
  // fix
  // conditionally required
  // either route_short_name or route_long_name must be specified
  table.string('route_short_name').nullable().alter();
  table.string('route_long_name').nullable().alter();
  // new columns
  table.integer('route_sort_order'); // non-negative
  table.integer('continuous_pickup', 1); // {0, 1, 2, 3}
  table.integer('continuous_drop_off', 1); // {0, 1, 2, 3}
});

exports.down = knex => knex.schema.table('gtfs_routes', table => {
  table.string('route_short_name').notNullable().alter();
  table.string('route_long_name').notNullable().alter();
  table.dropColumn('route_sort_order');
  table.dropColumn('continuous_pickup');
  table.dropColumn('continuous_drop_off');
});
