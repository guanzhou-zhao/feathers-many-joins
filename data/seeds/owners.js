
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('owners').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('owners').insert({id: 1, name: 'Tom'}),
        knex('owners').insert({id: 2, name: 'Tammy'}),
        knex('owners').insert({id: 3, name: 'Tim'}),
      ]);
    });
};
