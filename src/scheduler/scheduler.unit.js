const buildPairs = require('../build-pairs/build-pairs');
const scheduler = require('./scheduler');

describe('Scheduler', () => {
  it('produces one pairing combination from a list of two', () => {
    const pairs = buildPairs(['Alice', 'Bob']);
    const expectedSchedules = [
      ['Alice & Bob']
    ];
    expect(scheduler(pairs)).toEqual(expectedSchedules);
  });
  xit('produces three unique pairing combinations from a list of four', () => {
    const developers = ['Alice', 'Bob', 'Cathy', 'Dan'];
    const pairings = ['Alice/Bob,Cathy/Dan', 'Alice/Cathy,Bob/Dan', 'Alice/Dan,Bob/Cathy'];
    expect(scheduler(developers)).toEqual(pairings);
  });
});
