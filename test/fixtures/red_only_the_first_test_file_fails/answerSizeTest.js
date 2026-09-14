'use strict';

const hiker = require('./hiker.js');
const assert = require('assert');

// This name sorts before hikerTest.js, so it is the file node runs. Its
// assertion is false, so it throws an AssertionError before its own print is
// reached, and hikerTest.js is an argument rather than a script so its green
// line never appears either.
assert.equal(String(hiker.answer()).length, 3);

console.log('answerSizeTest ran');
