const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(mod = true) {
    this.isDirect = mod;

    this.table = this.createTable();
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    if (typeof (message) !== 'string' || typeof (key) !== 'string') {
      throw new Error('Incorrect arguments!');
    }

    let arrMessage = message.toUpperCase().match(/[A-Z]/g) || [];
    while (key.length < arrMessage.length) {
      key = key.repeat(2);
    }
    key = key.slice(0, arrMessage.length).toUpperCase().split('');
    message = message.toUpperCase().split('');

    for (let i = 0, j = 0; i < key.length; i++) {
      if (!message[i + j].match(/[A-Z]/)) {
        message[i + j] = message[i + j];
        j++;
        i--;
        continue;
      }
      message[i + j] = this.table[key[i].codePointAt(0) - 65][arrMessage[i].codePointAt(0) - 65];
    }

    return this.isDirect ? message.join('') : message.reverse().join('');
  }

  decrypt(eMessage, key) {
    if (eMessage === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    if (typeof (eMessage) !== 'string' || typeof (key) !== 'string') {
      throw new Error('Incorrect arguments!');
    }

    let arrMessage = eMessage.toUpperCase().match(/[A-Z]/g) || [];
    while (key.length < arrMessage.length) {
      key = key.repeat(2);
    }
    key = key.slice(0, arrMessage.length).toUpperCase().split('');
    eMessage = eMessage.toUpperCase().split('');

    for (let i = 0, j = 0; i < key.length; i++) {
      if (!eMessage[i + j].match(/[A-Z]/)) {
        eMessage[i + j] = eMessage[i + j];
        j++;
        i--;
        continue;
      }
      eMessage[i + j] = this.table[0][this.table[key[i].codePointAt(0) - 65].indexOf(eMessage[i + j])];
    }

    return this.isDirect ? eMessage.join('') : eMessage.reverse().join('');
  }

  createTable() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const arr = [];
    let currentAlphabet = [];
    for (let i = 0; i < 26; i++) {
      for (let j = i; j < 26; j++) {
        currentAlphabet.push(String.fromCodePoint(j + 65));
      }
      currentAlphabet = [...currentAlphabet, ...alphabet].slice(0, 26);
      arr.push(currentAlphabet);
      currentAlphabet = [];
    }
    return arr;
  }
}

module.exports = {
  VigenereCipheringMachine
};
