exports.up = knex => knex.schema.createTable('gtfs_stops', (table) => {
  table.string('stop_id').notNullable(); // dataset unique
  table.string('stop_code');
  table.string('stop_name').notNullable();
  table.string('stop_desc');
  table.float('stop_lat').notNullable(); // WGS 84 latitude
  table.float('stop_lon').notNullable(); // WGS 84 longitude
  table.string('zone_id');
  table.string('stop_url');
  table.integer('location_type', 1); // {null, 0, 1}
  table.string('parent_station');
  table.string('stop_timezone'); // valid values: http://en.wikipedia.org/wiki/List_of_tz_zones
  table.integer('wheelchair_boarding', 1); // {null, 0, 1, 2}
});

exports.down = knex => knex.schema.dropTable('gtfs_stops');
