exports.up = knex => knex.schema.createTable('gtfs_shapes', (table) => {
  table.string('shape_id').notNullable(); // dataset unique
  table.float('shape_pt_lat').notNullable(); // WGS 84 latitude
  table.float('shape_pt_lon').notNullable(); // WGS 84 longitude
  table.integer('shape_pt_sequence').notNullable(); // non-negative integers
  table.float('shape_dist_traveled');
});

exports.down = knex => knex.schema.dropTable('gtfs_shapes');
