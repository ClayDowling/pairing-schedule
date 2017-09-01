
class PairSet {

    constructor () {
        this.pairs = [];
    }

    add (pair) {
        this.pairs.push(pair);
    }

    contains (pair) {
        var i = 0;
        for(i = 0; i < this.pairs.length; ++i) {
            if (pair.equals(this.pairs[i])) {
                return true;
            }
        }
        return false;
    }

}

module.exports = PairSet;