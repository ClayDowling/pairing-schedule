const Pair = require('./pair.js');

class PairSet {

    constructor () {
        this.pairs = [];
    }

    add (pair) {
        this.pairs.push(pair);
    }

}

module.exports = PairSet;