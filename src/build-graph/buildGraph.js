function isEdgeUnique(edge, edges) {
  for (let i = 0; i < edges.length; i++) {
    if ((edges[i].v1 == edge.v1 && edges[i].v2 == edge.v2) ||
      edges[i].v1 == edge.v2 && edges[i].v2 == edge.v1) return false;
  }
  return true;
}

function buildEdges(nodes) {
  const edges = [];
  const numberOfNodes = nodes.length
  for (let i = 0; i < numberOfNodes; i++) {
    for (let j = i + 1; j < numberOfNodes; j++) {
      const edge = {
        v1: nodes[i],
        v2: nodes[j]
      };
      if (isEdgeUnique(edge, edges)) edges.push(edge);
    }
  }
  return edges;
}

module.exports = (nodes) => {
  return {
    nodes,
    edges: buildEdges(nodes)
  };
};
