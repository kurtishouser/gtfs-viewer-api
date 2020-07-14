exports.up = knex => knex.schema.createTable('gtfs_calendar', (table) => {
  table.string('service_id').notNullable(); // references trips.service_id
  table.string('monday').notNullable(); // {0, 1}
  table.string('tuesday').notNullable(); // {0, 1}
  table.string('wednesday').notNullable(); // {0, 1}
  table.string('thursday').notNullable(); // {0, 1}
  table.string('friday').notNullable(); // {0, 1}
  table.string('saturday').notNullable(); // {0, 1}
  table.string('sunday').notNullable(); // {0, 1}
  table.string('start_date').notNullable(); // YYYYMMDD
  table.string('end_date').notNullable(); // YYYYMMDD
});

exports.down = knex => knex.schema.dropTable('gtfs_calendar');
