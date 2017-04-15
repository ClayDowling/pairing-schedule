const buildPairs = require('../build-pairs/build-pairs');
const scheduler = require('./scheduler');

describe('Scheduler', () => {
  it('produces one pairing schedule from one pair', () => {
    const devs = ['Alice', 'Bob'];
    const pairs = buildPairs(devs);
    const expectedSchedules = [
      ['Alice & Bob']
    ];
    expect(scheduler(devs, pairs)).toEqual(expectedSchedules);
  });
  it('produces three pairing schedules from six pairs', () => {
    const devs = ['Alice', 'Bob', 'Cathy', 'Dan'];
    const pairs = buildPairs(devs);
    const expectedSchedules = [
      ['Alice & Bob', 'Cathy & Dan'],
      ['Alice & Cathy', 'Bob & Dan'],
      ['Alice & Dan', 'Bob & Cathy']
    ];
    expect(scheduler(devs, pairs)).toEqual(expectedSchedules);
  });
  xit('produces five pairing schedules from fifteen pairs', () => {
    const devs = ['Alice', 'Bob', 'Cathy', 'Dan', 'Ellen', 'Frank'];
    const pairs = buildPairs(devs);
    const expectedSchedules = [
      ['Alice & Bob', 'Cathy & Dan', 'Ellen & Frank'],
      ['Alice & Frank', 'Bob & Cathy', 'Dan & Ellen'],
      ['Alice & Dan', 'Bob & Frank', 'Cathy & Ellen'],
      ['Alice & Cathy', 'Bob & Ellen', 'Dan & Frank'],
      ['Alice & Ellen', 'Bob & Dan', 'Cathy & Frank']
    ];
    expect(scheduler(devs, pairs)).toEqual(expectedSchedules);
  });
});
