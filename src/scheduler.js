function createPair(dev1, dev2) {
  return dev1 + '/' + dev2;
}

module.exports = (developers) => {
  const pairings = [];
  const numberOfDevs = developers.length;
  for(let i = 0; i < numberOfDevs - 1; i++){
    pairings.push(createPair(developers[i % numberOfDevs],developers[(i + 1) % numberOfDevs]));
  }
  return pairings;
};
