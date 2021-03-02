const CustomError = require("../extensions/custom-error");

const chainMaker = {
  links: [],

  getLength() {
    return this.links.length
  },

  addLink(value) {
    this.links = [...this.links, String(value)]
    return this
  },
  removeLink(position) {
    if (this.links[position] === undefined) {
      chainMaker.links = []
      throw new Error('Invalid Index')
    }
    this.links = this.links.filter((_, i) => i !== position-1)
    return this
  },
  reverseChain() {
    this.links = this.links.reverse()
    return this
  },
  finishChain() {
    const res = this.links.map(el => `( ${el} )`).join('~~')
    chainMaker.links = []
    return res
  }
};

module.exports = chainMaker;
