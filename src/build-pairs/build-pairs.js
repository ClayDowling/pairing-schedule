function buildEdge(dev1, dev2) {
  return { dev1, dev2, pair: dev1 + ' & ' + dev2 };
}

function buildGraph(devs) {
  const edges = [];
  const numberOfdevs = devs.length;
  for (let i = 0; i < numberOfdevs; i++) {
    for (let j = i + 1; j < numberOfdevs; j++) {
      const edge = buildEdge(devs[i], devs[j]);
      edges.push(edge);
    }
  }
  return edges;
}

module.exports = (devs) => {
  return buildGraph(devs);
};
