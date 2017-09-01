const PairSet = require('./pairset.js');
const Pair = require('./pair.js');

fdescribe('PairSet object', () => {

    describe('add', () => {
        it('increases the size of pairs by one', () => {
            const alpha = new PairSet();
            alpha.add(new Pair('Alice', 'Bob'));

            expect(alpha.pairs.length).toEqual(1);
        });

        it('puts the added objects onto pairs', () => {
            const alpha = new PairSet();
            const beta = new Pair('Cathy', 'Dave');

            alpha.add(beta);

            expect(alpha.pairs[0].equals(beta)).toEqual(true);
        });

        it('puts two added objects onto pairs when called twice', () => {
            const ps = new PairSet();
            const alpha = new Pair('Alice', 'Bob');
            const beta = new Pair('Cathy', 'Dave');

            ps.add(alpha);
            ps.add(beta);

            expect(ps.pairs[0].equals(alpha)).toEqual(true);
            expect(ps.pairs[1].equals(beta)).toEqual(true);
        });
    });

    describe('contains', () => {
        it('returns true when Pair is contained in pairs', () => {
            const ps = new PairSet();
            const alpha = new Pair('Alice', 'Bob');
            ps.add(alpha);

            expect(ps.contains(alpha)).toEqual(true);
        });
        it('returns false when Pair is not contained in pairs', () => {
            const ps = new PairSet();
            const alpha = new Pair('Alice', 'Bob');

            expect(ps.contains(alpha)).toEqual(false);
        });
    });

});