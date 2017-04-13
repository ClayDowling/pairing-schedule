function edgesAreSymmetric(edge1, edge2) {
  return edge1.node1 == edge2.node1 && edge1.node2 == edge2.node2 ||
    edge1.node1 == edge2.node2 && edge1.node2 == edge2.node1;
}

function edgeIsUnique(edge, edges) {
  for (let i = 0; i < edges.length; i++) {
    if (edgesAreSymmetric(edge, edges[i])) return false;
  }
  return true;
}

function buildEdge(node1, node2) {
  return { node1, node2, pairing: node1 + ' & ' + node2 };
}

function buildGraph(nodes) {
  const edges = [];
  const numberOfNodes = nodes.length;
  for (let i = 0; i < numberOfNodes; i++) {
    for (let j = i + 1; j < numberOfNodes; j++) {
      const edge = buildEdge(nodes[i], nodes[j]);
      if (edgeIsUnique(edge, edges)) edges.push(edge);
    }
  }
  return edges;
}

module.exports = (nodes) => {
  return buildGraph(nodes);
};
