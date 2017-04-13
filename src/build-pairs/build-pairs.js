function edgesAreSymmetric(edge1, edge2) {
  return edge1.dev1 == edge2.dev1 && edge1.dev2 == edge2.dev2 ||
    edge1.dev1 == edge2.dev2 && edge1.dev2 == edge2.dev1;
}

function edgeIsUnique(edge, edges) {
  for (let i = 0; i < edges.length; i++) {
    if (edgesAreSymmetric(edge, edges[i])) return false;
  }
  return true;
}

function buildEdge(dev1, dev2) {
  return { dev1, dev2, pair: dev1 + ' & ' + dev2 };
}

function buildGraph(devs) {
  const edges = [];
  const numberOfdevs = devs.length;
  for (let i = 0; i < numberOfdevs; i++) {
    for (let j = i + 1; j < numberOfdevs; j++) {
      const edge = buildEdge(devs[i], devs[j]);
      if (edgeIsUnique(edge, edges)) edges.push(edge);
    }
  }
  return edges;
}

module.exports = (devs) => {
  return buildGraph(devs);
};
