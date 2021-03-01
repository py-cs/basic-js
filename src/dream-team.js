const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false
  return members
   .filter(el => typeof el === 'string')
   .reduce((acc, el) => acc
    .concat(el.trim()
    .charAt(0)
    .toUpperCase()), [])
   .sort()
   .join('')
};
