const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  const res = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
      if (i < arr.length - 1) {
        res.push(null)
        i++
      }
      continue
    }
    if (arr[i] === '--double-next') {
      if (i < arr.length - 2) {
        res.push(arr[i+1])
      }
      continue
    }
    if (arr[i] === '--discard-prev') {
      if (res.length) {
        res.pop()
      }
      continue
    }
    if (arr[i] === '--double-prev') {
      if (res.length) {
        res.push(res[res.length-1])
      }
      continue
    }
    res.push(arr[i])
  }
  return res.filter(el => el !== null)
}