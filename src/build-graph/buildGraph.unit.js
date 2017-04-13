var buildGraph = require('./buildGraph');

describe('Graph builder', () => {
  it('constructs a graph with 2 nodes and 1 edge', () => {
    const nodes = ['Alice', 'Bob'];
    const expectedGraph = [{ v1: 'Alice', v2: 'Bob' }];
    expect(buildGraph(nodes)).toEqual(expectedGraph);
  });
  it('constructs a graph with 4 nodes and 6 edges', () => {
    const nodes = ['Alice', 'Bob', 'Cathy', 'Dan'];
    const expectedGraph = [
      { v1: 'Alice', v2: 'Bob' },
      { v1: 'Alice', v2: 'Cathy' },
      { v1: 'Alice', v2: 'Dan' },
      { v1: 'Bob', v2: 'Cathy' },
      { v1: 'Bob', v2: 'Dan' },
      { v1: 'Cathy', v2: 'Dan' }
    ];
    expect(buildGraph(nodes)).toEqual(expectedGraph);
  });
  it('constructs a graph with 6 nodes and 15 edges', () => {
    const nodes = ['Alice', 'Bob', 'Cathy', 'Dan', 'Ellen', 'Frank'];
    const expectedGraph = [
      { v1: 'Alice', v2: 'Bob' },
      { v1: 'Alice', v2: 'Cathy' },
      { v1: 'Alice', v2: 'Dan' },
      { v1: 'Alice', v2: 'Ellen' },
      { v1: 'Alice', v2: 'Frank' },
      { v1: 'Bob', v2: 'Cathy' },
      { v1: 'Bob', v2: 'Dan' },
      { v1: 'Bob', v2: 'Ellen' },
      { v1: 'Bob', v2: 'Frank' },
      { v1: 'Cathy', v2: 'Dan' },
      { v1: 'Cathy', v2: 'Ellen' },
      { v1: 'Cathy', v2: 'Frank' },
      { v1: 'Dan', v2: 'Ellen' },
      { v1: 'Dan', v2: 'Frank' },
      { v1: 'Ellen', v2: 'Frank' }
    ];
    expect(buildGraph(nodes)).toEqual(expectedGraph);
  });
});
