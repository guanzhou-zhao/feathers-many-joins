
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cats').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('cats').insert({id: 1, name: 'fluffy', owner_id: 1}),
        knex('cats').insert({id: 2, name: 'tick', owner_id: 1}),
        knex('cats').insert({id: 3, name: 'snowball', owner_id: 2}),
      ]);
    });
};
