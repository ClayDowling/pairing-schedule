const Pair = require('../pair/pair.js');
var buildPairs = require('./build-pairs');

describe('Pair builder', () => {
  it('constructs 1 pair with 2 devs', () => {
    const devs = ['Alice', 'Bob'];
    const expectedGraph = [new Pair('Alice', 'Bob')];
    expect(buildPairs(devs)).toEqual(expectedGraph);
  });
  it('constructs 6 pairs with 4 devs', () => {
    const devs = ['Alice', 'Bob', 'Cathy', 'Dan'];
    const expectedGraph = [
      new Pair('Alice', 'Bob'),
      new Pair('Alice', 'Cathy'),
      new Pair('Alice', 'Dan'),
      new Pair('Bob', 'Cathy'),
      new Pair('Bob', 'Dan'),
      new Pair('Cathy', 'Dan')
    ];
    expect(buildPairs(devs)).toEqual(expectedGraph);
  });
  it('constructs 15 pairs with 6 devs', () => {
    const devs = ['Alice', 'Bob', 'Cathy', 'Dan', 'Ellen', 'Frank'];
    const expectedGraph = [
      new Pair('Alice', 'Bob'),
      new Pair('Alice', 'Cathy'),
      new Pair('Alice', 'Dan'),
      new Pair('Alice', 'Ellen'),
      new Pair('Alice', 'Frank'),
      new Pair('Bob', 'Cathy'),
      new Pair('Bob', 'Dan'),
      new Pair('Bob', 'Ellen'),
      new Pair('Bob', 'Frank'),
      new Pair('Cathy', 'Dan'),
      new Pair('Cathy', 'Ellen'),
      new Pair('Cathy', 'Frank'),
      new Pair('Dan', 'Ellen'),
      new Pair('Dan', 'Frank'),
      new Pair('Ellen', 'Frank')
    ];
    expect(buildPairs(devs)).toEqual(expectedGraph);
  });
});
