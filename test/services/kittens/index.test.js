'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('kittens service', function() {
  it('registered the kittens service', () => {
    assert.ok(app.service('kittens'));
  });
});
