/*
 * Tests
 *
 */

// Dependencies
const assert = require("assert");
const lib = require("./../app/lib");

// Holder for tests
const tests = {};

// Assert that validBraces function is returning true
tests['lib.validBraces("({([])})") should return true'] = done => {
  const val = lib.validBraces("({([])})");
  assert.ok(val);
  done();
};

// Assert that validBraces function is returning false
tests['lib.validBraces("({)") should return false'] = done => {
  const val = lib.validBraces("({)");
  assert.equal(val, false);
  done();
};

// Assert that generateHashtag function is returning "#HelloWorld"
tests[
  'lib.generateHashtag("    Hello     World   ") should return "#HelloWorld"'
] = done => {
  const val = lib.generateHashtag("    Hello     World   ");
  assert.equal(val, "#HelloWorld");
  done();
};

// Export the tests to the runner
module.exports = tests;
