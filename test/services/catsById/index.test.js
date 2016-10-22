'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('catsById service', function() {
  it('registered the catsByIds service', () => {
    assert.ok(app.service('catsByIds'));
  });
});
