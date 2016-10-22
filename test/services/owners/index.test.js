'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('owners service', function() {
  it('registered the owners service', () => {
    assert.ok(app.service('owners'));
  });
});
