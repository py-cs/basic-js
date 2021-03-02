const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direct=true) {
    this.direct = direct
  }
  encryptChar(char, key) {
    const shift = key.toUpperCase().charCodeAt(0) - 65
    let newCode = char.charCodeAt(0) + shift
    if (newCode > 90) newCode = newCode - 26
    return String.fromCharCode(newCode)
  }
  decryptChar(char, key) {
    const shift = key.toUpperCase().charCodeAt(0) - 65
    let newCode = char.charCodeAt(0) - shift
    if (newCode < 65) newCode = newCode + 26
    return String.fromCharCode(newCode)
  }
  encrypt(string, key) {
    if (!arguments || arguments.length < 2 ) throw Error('Must get 2 arguments')
    let k = 0
    let res = []
    for (let i=0; i < string.length; i++) {
      let char = string.charAt(i).toUpperCase()
      if (/^[A-Z]$/.test(char)) {
        res.push(this.encryptChar(char, key.charAt(k)))
        k++
        if (k === key.length) k = 0
      } else {
        res.push(char)
      }
    }
    if (!this.direct) res = res.reverse()
    return res.join('')
  }    
  decrypt(string, key) {
    if (!arguments || arguments.length < 2 ) throw Error('Must get 2 arguments')
    let k = 0
    let res = []
    for (let i=0; i < string.length; i++) {
      let char = string.charAt(i).toUpperCase()
      if (/^[A-Z]$/.test(char)) {
        res.push(this.decryptChar(char, key.charAt(k)))
        k++
        if (k === key.length) k = 0
      } else {
        res.push(char)
      }
    }
    if (!this.direct) res = res.reverse()
    return res.join('')
  }
}

module.exports = VigenereCipheringMachine;
