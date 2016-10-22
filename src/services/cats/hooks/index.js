'use strict';

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');


exports.before = {
  all: [],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};

exports.after = {
  all: [],
  find: [
   hooks.populate('kittens', {
    service: 'kittens-by-cat-id',
    field: 'id'
  })
  ],
  get: [
   hooks.populate('kittens', {
    service: 'kittens-by-cat-id',
    field: 'id'
  })
  ],
  create: [],
  update: [],
  patch: [],
  remove: []
};
