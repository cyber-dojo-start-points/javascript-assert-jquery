'use strict';

module.exports = {
  answer,
  question
};

const jqa = require('./jQueryAdapter.js');

function answer() {
  const $ = jqa.file('hiker.html');
  return $('answer').text();
}

function question() {
  const $ = jqa.file('hiker.html');
  return $('question').text();
}
