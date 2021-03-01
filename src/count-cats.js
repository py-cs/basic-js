const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  return arr.reduce((acc, row) => acc + row.filter(el => el === '^^').length, 0)
};
