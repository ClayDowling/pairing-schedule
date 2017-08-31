class Pair {
    constructor (first, second) {
        this.first = first;
        this.second = second;
    }

    equals (rhs) {
        if (this.first === rhs.second && this.second === rhs.first) {
            return true;
        }
        if (this.first != rhs.first) {
            return false;
        }
        if (this.second != rhs.second) {
            return false;
        }
        return true;
    }

    contains (dev) {
        if (this.first === dev || this.second === dev) {
            return true;
        }
        return false;
    }
}

module.exports = Pair;
