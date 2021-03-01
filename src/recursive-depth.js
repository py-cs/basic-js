const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, current=0) {
    current++
    return Math.max(...arr.map(el => Array.isArray(el) ? this.calculateDepth(el, current) : current), 1)
  }
}


