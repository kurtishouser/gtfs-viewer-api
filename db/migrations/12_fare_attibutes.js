exports.up = knex => knex.schema.createTable('gtfs_fare_attributes', (table) => {
  table.string('fare_id').notNullable(); // dataset unique
  table.decimal('price').notNullable(); // unit specified by currency type
  table.string('currency_type').notNullable(); // ISO 4217: http://en.wikipedia.org/wiki/ISO_4217
  table.string('payment_method').notNullable(); // {0, 1}
  table.string('transfers').notNullable(); // {empty, 0, 1, 2}
  table.string('transfer_duration'); // time in seconds
});

exports.down = knex => knex.schema.dropTable('gtfs_fare_attributes');
