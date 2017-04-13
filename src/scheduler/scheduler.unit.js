const buildPairs = require('../build-pairs/build-pairs');
const scheduler = require('./scheduler');

describe('Scheduler', () => {
  it('produces one pairing schedule from one pair', () => {
    const pairs = buildPairs(['Alice', 'Bob']);
    const expectedSchedules = [
      'Alice & Bob'
    ];
    expect(scheduler(pairs)).toEqual(expectedSchedules);
  });
  xit('produces three pairing schedules from six pairs', () => {
    const pairs = buildPairs(['Alice', 'Bob', 'Cathy', 'Dan']);
    const expectedSchedules = [
      ['Alice & Bob']
    ];
    expect(scheduler(pairs)).toEqual(expectedSchedules);
  });
});
