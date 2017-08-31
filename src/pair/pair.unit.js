const Pair = require('./pair.js');

fdescribe('Pair object', () => {

    describe('equals', () => {

        it('returns true when first and second are the same', () => {
            const alpha = new Pair('Alice', 'Bob');
            const beta = new Pair('Alice', 'Bob');

            expect(alpha.equals(beta)).toEqual(true);
        });

        it('returns false when first is different', () => {
            const alpha = new Pair('Alice', 'Bob');
            const beta = new Pair('Cathy', 'Bob');

            expect(alpha.equals(beta)).toEqual(false);
        });

        it('returns false when second is different', () => {
            const alpha = new Pair('Alice', 'Bob');
            const beta = new Pair('Alice', 'Dave');

            expect(alpha.equals(beta)).toEqual(false);
        });

        it('returns true when first equals second and second equals first', () => {
            const alpha = new Pair('Alice', 'Bob');
            const beta = new Pair('Bob', 'Alice');

            expect(alpha.equals(beta)).toEqual(true);
        });

    });

    describe('contains', () => {

        it('returns true when first contains dev', () => {
            const alpha = new Pair('Alice', 'Bob');

            expect(alpha.contains('Alice')).toEqual(true);
        });

        it('returns true when second contains dev', () => {
            const alpha = new Pair('Alice', 'Bob');

            expect(alpha.contains('Bob')).toEqual(true);
        });

        it('returns false when neither first nor second contains dev', () => {
            const alpha = new Pair('Alice', 'Bob');

            expect(alpha.contains('Cathy')).toEqual(false);
        });

    });

});
