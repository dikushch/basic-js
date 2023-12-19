const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const nString = n.toString();
  const sumArr = [];
  for (let i = 0; i < nString.length; i += 1) {
    let number = nString.slice(0, i) + nString.slice(i + 1);
    sumArr.push(+number);
  }

  return Math.max(...sumArr);
}

module.exports = {
  deleteDigit
};
