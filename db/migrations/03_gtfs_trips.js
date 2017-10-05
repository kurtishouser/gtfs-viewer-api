exports.up = knex => knex.schema.createTable('gtfs_trips', (table) => {
  table.string('route_id').notNullable(); // dataset unique
  table.string('service_id').notNullable(); // references calendar or calendar_dates
  table.string('trip_id').notNullable(); // dataset unique
  table.string('trip_headsign');
  table.string('trip_short_name');
  table.integer('direction_id', 1); // {0, 1}
  table.string('block_id');
  table.string('shape_id'); // references shapes.shap_id
  table.integer('wheelchair_accessible', 1); // {0, 1, 2}
  table.integer('bikes_allowed', 1); // {0, 1, 2}
});

exports.down = knex => knex.schema.dropTable('gtfs_trips');
