const db = require('../../../data')
const path = require('path')
const service = require('feathers-knex')
const hooks = require('./hooks')

module.exports = function(){
  const app = this

  let options = {
    Model: db,
    name: 'owners',
    paginate: {
      default: 5,
      max: 25
    }
  }

  // Initialize our service with any options it requires
  app.use('/owners', service(options))

  // Get our initialize service to that we can bind hooks
  const ownersService = app.service('/owners')

  // Set up our before hooks
  ownersService.before(hooks.before)

  // Set up our after hooks
  ownersService.after(hooks.after)
}
