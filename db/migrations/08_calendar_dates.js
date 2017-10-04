exports.up = knex => knex.schema.createTable('gtfs_calendar_dates', (table) => {
  table.string('service_id').notNullable(); // references trips.service_id
  table.string('date').notNullable(); // YYYYMMDD
  table.string('exception_type').notNullable(); // {1, 2}
});

exports.down = knex => knex.schema.dropTable('gtfs_calendar_dates');
