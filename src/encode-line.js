const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let prev = '';
  let arr = [];
  let index = 0;
  for (let i = 0; i < str.length; i++) {
    if (i == 0) {
      prev = str[i];
      arr[index] = prev;
      continue
    }
    if (str[i] == prev) {
      arr[index] += prev;
    }
    if (str[i] != prev) {
      index += 1;
      prev = str[i];
      arr[index] = prev;
    }
  }
  return arr.map(e => e.length > 1 ? e.length + e[0] : e[0]).join('');
}

module.exports = {
  encodeLine
};
