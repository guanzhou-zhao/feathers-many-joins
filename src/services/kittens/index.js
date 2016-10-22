const db = require('../../../data')
const path = require('path')
const service = require('feathers-knex')
const hooks = require('./hooks')

module.exports = function(){
  const app = this

  let options = {
    Model: db,
    name: 'kittens',
    paginate: {
      default: 5,
      max: 25
    }
  }

  // Initialize our service with any options it requires
  app.use('/kittens', service(options))

  // Get our initialize service to that we can bind hooks
  const kittensService = app.service('/kittens')

  // Set up our before hooks
  kittensService.before(hooks.before)

  // Set up our after hooks
  kittensService.after(hooks.after)
}
