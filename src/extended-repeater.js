const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const {repeatTimes, separator, addition, additionRepeatTimes, additionSeparator} = options
  if (!options.hasOwnProperty('addition')) return Array(repeatTimes).fill(String(str)).join(('separator' in options ? separator : '+'))
  const add = repeater(String(addition), {repeatTimes: additionRepeatTimes, separator: ('additionSeparator' in options ? additionSeparator : '|')})
  return Array(repeatTimes).fill(str + add).join(separator)
};
  