exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('kittens').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('kittens').insert({id: 1, name: 'kittycat1', cat_id: 1}),
        knex('kittens').insert({id: 2, name: 'kittycat2', cat_id: 1}),
        knex('kittens').insert({id: 3, name: 'kittycat3', cat_id: 2}),
      ]);
    });
};
