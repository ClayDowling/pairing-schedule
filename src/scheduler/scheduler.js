module.exports = (pairings) => {
  const schedules = [];
  const numberOfPairings = pairings.length;
  for (let i = 0; i < numberOfPairings; i++) {
    const pairs = [pairings[i].pair];
    schedules.push(pairs);
  }
  return schedules;
};
