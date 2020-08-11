exports.up = knex => knex.schema.table('gtfs_stops', table => {
  // fix
  // conditionally required
  table.string('stop_name').nullable().alter();
  table.string('stop_lat').nullable().alter();
  table.string('stop_lon').nullable().alter();
  // change type
  table.text('stop_desc').alter();
  // new columns
  table.string('level_id');
  table.string('platform_code');
});

exports.down = knex => knex.schema.table('gtfs_stops', table => {
  table.string('stop_name').notNullable().alter();
  table.string('stop_lat').notNullable().alter();
  table.string('stop_lon').notNullable().alter();
  table.string('stop_desc').alter();
  table.dropColumn('level_id');
  table.dropColumn('platform_code');
});
