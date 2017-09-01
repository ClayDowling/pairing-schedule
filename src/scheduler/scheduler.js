module.exports = (devs, pairings) => {
  const schedules = [];
  const numberOfPairings = pairings.length;
  for (let i = 0; i < numberOfPairings / (devs.length / 2); i++) {
    const schedule = [];
    // for (let j = 0; j < devs.length / 2; j++) {
    schedule.push(pairings[i]);
    if (pairings[i].name() != pairings[numberOfPairings - 1 - i].name()) {
      schedule.push(pairings[numberOfPairings - 1 - i]);
    }
    // }
    schedules.push(schedule);
  }
  return schedules;
};
