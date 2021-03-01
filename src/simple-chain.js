const CustomError = require("../extensions/custom-error");

const chainMaker = {
  links: [],

  getLength() {
    return this.links.length
  },

  addLink(value) {
    this.links = this.links.concat(''+value)
    return this
  },
  removeLink(position) {
    if (this.links[position] === undefined) throw new Error()
    this.links = this.links.filter((_, i) => i !== position-1)
    return this
  },
  reverseChain() {
    this.links = this.links.reverse()
    return this
  },
  finishChain() {
    const res = this.links.map(el => `( ${el} )`).join('~~')
    this.links = []
    return res
  }
};

module.exports = chainMaker;
