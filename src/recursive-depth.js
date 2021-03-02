const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, current=1) {
    return Math.max(...arr.map(el => Array.isArray(el) ? this.calculateDepth(el, current+1) : current), current)
  }
}
