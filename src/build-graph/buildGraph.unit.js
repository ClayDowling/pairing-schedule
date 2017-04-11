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
});
