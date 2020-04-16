
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {name: 'Toyota', price: 37000, sold: false, model: '2020 Avalon Hybrid' },
        {name: 'Nissan', price: 24100, sold: false, model: '2020 Altima'},
      ]);
    });
};
