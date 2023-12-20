const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const { repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|' } = options;

  let addStrArr = [];
  for (let i = 0; i < additionRepeatTimes; i++) {
    addStrArr[i] = `${addition}`;
  }
  const addStr = addStrArr.join(additionSeparator);

  const newStr = `${str}` + addStr;
  const newStrArr = [];
  for (let i = 0; i < repeatTimes; i++) {
    newStrArr[i] = newStr;
  }
  return newStrArr.join(separator);
}

module.exports = {
  repeater
};
