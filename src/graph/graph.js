function edgesAreSymmetric(edge1, edge2) {
  return edge1.v1 == edge2.v1 && edge1.v2 == edge2.v2 ||
    edge1.v1 == edge2.v2 && edge1.v2 == edge2.v1
}

function edgeIsUnique(edge, edges) {
  for (let i = 0; i < edges.length; i++) {
    if (edgesAreSymmetric(edge, edges[i])) return false;
  }
  return true;
}

function buildEdges(nodes) {
  const edges = [];
  const numberOfNodes = nodes.length
  for (let i = 0; i < numberOfNodes; i++) {
    for (let j = i + 1; j < numberOfNodes; j++) {
      const edge = { v1: nodes[i], v2: nodes[j] };
      if (edgeIsUnique(edge, edges)) edges.push(edge);
    }
  }
  return edges;
}

module.exports = (nodes) => {
  return buildEdges(nodes);
};
