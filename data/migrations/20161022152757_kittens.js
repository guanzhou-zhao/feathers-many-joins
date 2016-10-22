exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('kittens', function (table) {
    table.increments()
    table.string('name')
    table.integer('cat_id')
  })
  
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('kittens') 
}
