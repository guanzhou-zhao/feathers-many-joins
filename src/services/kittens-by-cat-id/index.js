'use strict';

const hooks = require('./hooks');

class Service {
  setup(app) {
    this.app = app
  }
  get(cat_id, params) {
    const kittens = this.app.service('kittens')
    return kittens.find({query: { cat_id }})
  }

}

module.exports = function(){
  const app = this;

  // Initialize our service with any options it requires
  app.use('/kittens-by-cat-id', new Service());

  // Get our initialize service to that we can bind hooks
  const kittensByCatIdService = app.service('/kittens-by-cat-id');

  // Set up our before hooks
  kittensByCatIdService.before(hooks.before);

  // Set up our after hooks
  kittensByCatIdService.after(hooks.after);
};

module.exports.Service = Service;
