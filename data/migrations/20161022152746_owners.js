
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('owners', function (table) {
    table.increments()
    table.string('name')
    table.timestamps()
  })
  
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('owners') 
}
