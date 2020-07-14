exports.up = knex => knex.schema.createTable('gtfs_routes', (table) => {
  table.string('route_id').notNullable();
  table.string('agency_id'); // references agencies.agency_id
  table.string('route_short_name').notNullable();
  table.string('route_long_name').notNullable();
  table.text('route_desc');
  // include Extended GTFS Route Types
  // https://developers.google.com/transit/gtfs/reference/extended-route-types
  table.integer('route_type', 4).notNullable();
  table.string('route_url');
  // six-character hexadecimal number
  table.string('route_color', 6);
  // six-character hexadecimal number
  table.string('route_text_color', 6);
});

exports.down = knex => knex.schema.dropTable('gtfs_routes');
