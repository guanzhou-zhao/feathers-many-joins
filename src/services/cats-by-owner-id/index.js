'use strict';

const hooks = require('./hooks');

class Service {
  setup(app) {
    this.app = app
  }

  get(owner_id, params) {
    const catsService = this.app.service('cats')
    return catsService.find({query: { owner_id }})
  }
}

module.exports = function(){
  const app = this;

  // Initialize our service with any options it requires
  app.use('/cats-by-owner-id', new Service());

  // Get our initialize service to that we can bind hooks
  const catsByIdService = app.service('/cats-by-owner-id');

  // Set up our before hooks
  catsByIdService.before(hooks.before);

  // Set up our after hooks
  catsByIdService.after(hooks.after);
};

module.exports.Service = Service;
