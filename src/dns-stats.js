const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const splitDomains = domains.map(e => e.split('.').reverse());

  const allValuesArr = [];
  for (let row of splitDomains) {
    let prev = '';
    for (let e of row) {
      prev += '.' + e;
      allValuesArr.push(prev);
    }
  }

  const allValuesSet = new Set(allValuesArr);
  const result = {};

  for (let key of allValuesSet) {
    let count = 0;
    for (let e of allValuesArr) {
      if (e === key) {
        count += 1;
      }
    }
    result[key] = count;
  }

  return result;
}

module.exports = {
  getDNSStats
};
