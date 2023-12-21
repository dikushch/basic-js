const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
    this.depth = 0;
  }
  calculateDepth = (arr) => {
    if (Array.isArray(arr)) {
      return 1 + Math.max(0, ...arr.map(e => this.calculateDepth(e)));
    }
    return 0;
  }
}

module.exports = {
  DepthCalculator
};
