module.exports = (pairings) => {
  const schedules = [];
  const numberOfPairings = pairings.length;
  for (let i = 0; i < numberOfPairings; i++) {
    schedules.push(pairings[i].pair);
  }
  return schedules;
};
