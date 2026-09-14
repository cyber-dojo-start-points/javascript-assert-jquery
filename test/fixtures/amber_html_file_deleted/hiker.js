'use strict';

module.exports = {
  answer
};

const jqa = require('./jQueryAdapter.js');

function answer() {
  // The learner has deleted hiker.html, so there is no mark-up to read. The
  // adapter's readFileSync throws, which is neither a jshint error nor an
  // AssertionError, so the light is amber.
  const $ = jqa.file('hiker.html');
  return $('answer').text();
}
