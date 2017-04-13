var buildGraph = require('./build-graph');

describe('Graph builder', () => {
  it('constructs 1 pairing with 2 nodes', () => {
    const nodes = ['Alice', 'Bob'];
    const expectedGraph = [{ node1: 'Alice', node2: 'Bob', pairing: 'Alice & Bob' }];
    expect(buildGraph(nodes)).toEqual(expectedGraph);
  });
  it('constructs a 6 pairings with 4 nodes', () => {
    const nodes = ['Alice', 'Bob', 'Cathy', 'Dan'];
    const expectedGraph = [
      { node1: 'Alice', node2: 'Bob', pairing: 'Alice & Bob' },
      { node1: 'Alice', node2: 'Cathy', pairing: 'Alice & Cathy' },
      { node1: 'Alice', node2: 'Dan', pairing: 'Alice & Dan' },
      { node1: 'Bob', node2: 'Cathy', pairing: 'Bob & Cathy' },
      { node1: 'Bob', node2: 'Dan', pairing: 'Bob & Dan' },
      { node1: 'Cathy', node2: 'Dan', pairing: 'Cathy & Dan' }
    ];
    expect(buildGraph(nodes)).toEqual(expectedGraph);
  });
  it('constructs a 15 pairings with 6 nodes', () => {
    const nodes = ['Alice', 'Bob', 'Cathy', 'Dan', 'Ellen', 'Frank'];
    const expectedGraph = [
      { node1: 'Alice', node2: 'Bob', pairing: 'Alice & Bob' },
      { node1: 'Alice', node2: 'Cathy', pairing: 'Alice & Cathy' },
      { node1: 'Alice', node2: 'Dan', pairing: 'Alice & Dan' },
      { node1: 'Alice', node2: 'Ellen', pairing: 'Alice & Ellen' },
      { node1: 'Alice', node2: 'Frank', pairing: 'Alice & Frank' },
      { node1: 'Bob', node2: 'Cathy', pairing: 'Bob & Cathy' },
      { node1: 'Bob', node2: 'Dan', pairing: 'Bob & Dan' },
      { node1: 'Bob', node2: 'Ellen', pairing: 'Bob & Ellen' },
      { node1: 'Bob', node2: 'Frank', pairing: 'Bob & Frank' },
      { node1: 'Cathy', node2: 'Dan', pairing: 'Cathy & Dan' },
      { node1: 'Cathy', node2: 'Ellen', pairing: 'Cathy & Ellen' },
      { node1: 'Cathy', node2: 'Frank', pairing: 'Cathy & Frank' },
      { node1: 'Dan', node2: 'Ellen', pairing: 'Dan & Ellen' },
      { node1: 'Dan', node2: 'Frank', pairing: 'Dan & Frank' },
      { node1: 'Ellen', node2: 'Frank', pairing: 'Ellen & Frank' }
    ];
    expect(buildGraph(nodes)).toEqual(expectedGraph);
  });
});
