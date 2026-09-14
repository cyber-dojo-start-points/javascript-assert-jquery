'use strict';

const hiker = require('./hiker.js');
const assert = require('assert');

// answer() reads the text of the answer element, so it is a string, and the
// mark-up still holds the answer the kata ships with.
assert.equal(hiker.answer(), '42');

console.log('All tests passed');
