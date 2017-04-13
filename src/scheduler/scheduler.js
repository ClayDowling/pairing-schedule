function copyPairs(pairings) {
  const copies = [];
  for (let i = 0; i < pairings.length; i++) {
    copies.push(pairings[i]);
  }
}

module.exports = (pairings) => {
  const schedules = [];
  const numberOfPairings = pairings.length;
  const copyOfPairings = copyPairs(pairings);
  for (let i = 0; i < numberOfPairings; i++) {
    schedules.push([pairings[i].pair]);
  }
  return schedules;
};
