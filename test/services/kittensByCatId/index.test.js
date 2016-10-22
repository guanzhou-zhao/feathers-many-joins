'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('kittensByCatId service', function() {
  it('registered the kittensByCatIds service', () => {
    assert.ok(app.service('kittensByCatIds'));
  });
});
