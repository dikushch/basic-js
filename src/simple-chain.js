const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value === null) {
      value = 'null';
    }
    if (Number.isNaN(value)) {
      value = 'NaN';
    }
    if (value === undefined) {
      value = '(  )';
    }
    this.chain.push(`( ${value.toString()} )`);
    return this;
  },
  removeLink(position) {
    if (!Number.isFinite(position) || this.chain[position - 1] === undefined) {
      this.chain = [];
      throw new Error("You can\'t remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const result = [...this.chain];
    this.chain = [];
    return result.join('~~');
  }
};

module.exports = {
  chainMaker
};
