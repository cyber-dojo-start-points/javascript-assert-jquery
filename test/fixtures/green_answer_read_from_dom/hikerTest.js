'use strict';

const hiker = require('./hiker.js');
const assert = require('assert');

// answer() selects an element out of hiker.html through jQuery, so what comes
// back is the element's text rather than a number. Asserting the question
// element too pins that the selector really reached the mark-up, which a
// green line on its own would not show.
assert.equal(hiker.answer(), '42');
assert.equal(hiker.question(), 'what is 6 * 9');

console.log('All tests passed');
