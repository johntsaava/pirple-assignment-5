/*
 * Simple functions
 *
 */

// Container for all the functions
const lib = {};

// Valid Braces
lib.validBraces = braces => {
  while (/\(\)|{}|\[\]/.test(braces)) {
    braces = braces.replace(/\(\)|{}|\[\]/, "");
  }
  return braces == 0;
};

// The Hashtag Generator
lib.generateHashtag = str => {
  if (!str) return false;
  str = str
    .trim()
    .replace(/(\w+)\s*/g, (match, p1) => p1[0].toUpperCase() + p1.slice(1));
  str = "#" + str;
  return str.length > 140 ? false : str;
};

// Export the module
module.exports = lib;
