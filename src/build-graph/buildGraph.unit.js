var buildGraph = require('./buildGraph');

describe('Graph builder', () => {
  it('assigns nodes passed in', () => {
    const nodes = ['Alice', 'Bob', 'Cathy', 'Dan'];
    expect(buildGraph(nodes).nodes).toEqual(nodes);
  });
  it('constructs a graph with 2 nodes and 1 edge', () => {
    const nodes = ['Alice', 'Bob'];
    const expectedGraph = {
      nodes,
      edges: [{
        v1: 'Alice',
        v2: 'Bob'
      }]
    };
    expect(buildGraph(nodes)).toEqual(expectedGraph);
  });
  it('constructs a graph with 4 nodes and 6 edges', () => {
    const nodes = ['Alice', 'Bob', 'Cathy', 'Dan'];
    const expectedGraph = {
      nodes,
      edges: [
        { v1: 'Alice', v2: 'Bob' },
        { v1: 'Alice', v2: 'Cathy' },
        { v1: 'Alice', v2: 'Dan' },
        { v1: 'Bob', v2: 'Cathy' },
        { v1: 'Bob', v2: 'Dan' },
        { v1: 'Cathy', v2: 'Dan' }
      ]
    };
    expect(buildGraph(nodes)).toEqual(expectedGraph);
  });
});
