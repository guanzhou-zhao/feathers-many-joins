const kittensByCatId = require('./kittens-by-cat-id');
const catsByOwnerId = require('./cats-by-owner-id');
const kittens = require('./kittens');
const cats = require('./cats');
const owners = require('./owners');
const authentication = require('./authentication');
const user = require('./user');

module.exports = function() {
  const app = this;


  app.configure(kittensByCatId);
  app.configure(catsByOwnerId);
  app.configure(authentication);
  app.configure(user);
  app.configure(owners);
  app.configure(cats);
  app.configure(kittens);
};
