const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let commonChars = 0;
  let str = s2;
  for (let char of s1) {
    let charIndex = str.indexOf(char);
    if (charIndex != -1) {
      commonChars += 1;
      str = str.slice(0, charIndex) + str.slice(charIndex + 1);
    }
  }
  return commonChars;
}

module.exports = {
  getCommonCharacterCount
};
