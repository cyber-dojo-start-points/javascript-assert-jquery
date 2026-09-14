'use strict';

const hiker = require('../hiker.js');
const assert = require('assert');

// A test file in a sub-directory. node's glob descends, so this file is
// required and the half-written line below stops the run with a SyntaxError.
// jshint is still handed a one-level *.js, so it never sees the file and no
// lint error is printed. hikerTest.js sorts first and has already printed the
// green line by then, which is why the light rests on the exit status.
assert.equal(String(hiker.answer()).length,

console.log('nested answerSizeTest ran');
