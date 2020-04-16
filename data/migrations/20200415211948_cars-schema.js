
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments();
      tbl.text('name', 128).unique().notNullable();
      tbl.decimal('price');
      tbl.boolean('sold');
      tbl.varchar('model', 128)
  })
};

exports.down = function(knex) {
  knex.schema.dropTabeIfExists('cars')
};
