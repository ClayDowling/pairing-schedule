module.exports = (devs, pairings) => {
  const schedules = [];
  const numberOfPairings = pairings.length;
  for (let i = 0; i < numberOfPairings / (devs.length / 2); i++) {
    const schedule = [];
    // for (let j = 0; j < devs.length / 2; j++) {
    schedule.push(pairings[i].pair);
    if (pairings[i].pair != pairings[numberOfPairings - 1 - i].pair) schedule.push(pairings[numberOfPairings - 1 - i].pair);
    // }
    schedules.push(schedule);
  }
  return schedules;
};
