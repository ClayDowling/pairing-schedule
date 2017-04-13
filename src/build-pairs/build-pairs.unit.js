var buildPairs = require('./build-pairs');

describe('Pair builder', () => {
  it('constructs 1 pair with 2 devs', () => {
    const devs = ['Alice', 'Bob'];
    const expectedGraph = [{ dev1: 'Alice', dev2: 'Bob', pair: 'Alice & Bob' }];
    expect(buildPairs(devs)).toEqual(expectedGraph);
  });
  it('constructs a 6 pairs with 4 devs', () => {
    const devs = ['Alice', 'Bob', 'Cathy', 'Dan'];
    const expectedGraph = [
      { dev1: 'Alice', dev2: 'Bob', pair: 'Alice & Bob' },
      { dev1: 'Alice', dev2: 'Cathy', pair: 'Alice & Cathy' },
      { dev1: 'Alice', dev2: 'Dan', pair: 'Alice & Dan' },
      { dev1: 'Bob', dev2: 'Cathy', pair: 'Bob & Cathy' },
      { dev1: 'Bob', dev2: 'Dan', pair: 'Bob & Dan' },
      { dev1: 'Cathy', dev2: 'Dan', pair: 'Cathy & Dan' }
    ];
    expect(buildPairs(devs)).toEqual(expectedGraph);
  });
  it('constructs a 15 pairs with 6 devs', () => {
    const devs = ['Alice', 'Bob', 'Cathy', 'Dan', 'Ellen', 'Frank'];
    const expectedGraph = [
      { dev1: 'Alice', dev2: 'Bob', pair: 'Alice & Bob' },
      { dev1: 'Alice', dev2: 'Cathy', pair: 'Alice & Cathy' },
      { dev1: 'Alice', dev2: 'Dan', pair: 'Alice & Dan' },
      { dev1: 'Alice', dev2: 'Ellen', pair: 'Alice & Ellen' },
      { dev1: 'Alice', dev2: 'Frank', pair: 'Alice & Frank' },
      { dev1: 'Bob', dev2: 'Cathy', pair: 'Bob & Cathy' },
      { dev1: 'Bob', dev2: 'Dan', pair: 'Bob & Dan' },
      { dev1: 'Bob', dev2: 'Ellen', pair: 'Bob & Ellen' },
      { dev1: 'Bob', dev2: 'Frank', pair: 'Bob & Frank' },
      { dev1: 'Cathy', dev2: 'Dan', pair: 'Cathy & Dan' },
      { dev1: 'Cathy', dev2: 'Ellen', pair: 'Cathy & Ellen' },
      { dev1: 'Cathy', dev2: 'Frank', pair: 'Cathy & Frank' },
      { dev1: 'Dan', dev2: 'Ellen', pair: 'Dan & Ellen' },
      { dev1: 'Dan', dev2: 'Frank', pair: 'Dan & Frank' },
      { dev1: 'Ellen', dev2: 'Frank', pair: 'Ellen & Frank' }
    ];
    expect(buildPairs(devs)).toEqual(expectedGraph);
  });
});
