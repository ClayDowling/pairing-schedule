module.exports = (pairings) => {
  const schedules = [];
  const numberOfPairings = pairings.length;
  for (let i = 0; i < numberOfPairings / 2; i++) {
    const schedule = [];
    schedule.push(pairings[i].pair);
    if (pairings[i].pair != pairings[numberOfPairings - 1 - i].pair) schedule.push(pairings[numberOfPairings - 1 - i].pair);
    schedules.push(schedule);
  }
  return schedules;
};
