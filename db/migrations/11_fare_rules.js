exports.up = knex => knex.schema.createTable('gtfs_fare_rules', (table) => {
  table.string('fare_id').notNullable(); // references fare_attributes.fare_id
  table.string('route_id'); // references routes.route_id
  table.string('origin_id'); // references stops.zone_id
  table.string('destination_id'); // references stops.zone_id
  table.string('contains_id'); // references stops.zone_id
});

exports.down = knex => knex.schema.dropTable('gtfs_fare_rules');
