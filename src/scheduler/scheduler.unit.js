const Pair = require('../pair/pair.js');
const buildPairs = require('../build-pairs/build-pairs');
const scheduler = require('./scheduler');

describe('Scheduler', () => {
  it('produces one pairing schedule from one pair', () => {
    const devs = ['Alice', 'Bob'];
    const pairs = buildPairs(devs);
    const expectedSchedules = [
      [new Pair('Alice', 'Bob')]
    ];
    expect(scheduler(devs, pairs)).toEqual(expectedSchedules);
  });
  it('produces three pairing schedules from six pairs', () => {
    const devs = ['Alice', 'Bob', 'Cathy', 'Dan'];
    const pairs = buildPairs(devs);
    const expectedSchedules = [
      [new Pair('Alice', 'Bob'), new Pair('Cathy', 'Dan')],
      [new Pair('Alice', 'Cathy'), new Pair('Bob', 'Dan')],
      [new Pair('Alice', 'Dan'), new Pair('Bob', 'Cathy')]
    ];
    expect(scheduler(devs, pairs)).toEqual(expectedSchedules);
  });
  it('produces five pairing schedules from fifteen pairs', () => {
    const devs = ['Alice', 'Bob', 'Cathy', 'Dan', 'Ellen', 'Frank'];
    const pairs = buildPairs(devs);
    const expectedSchedules = [
      [new Pair('Alice', 'Bob'), new Pair('Cathy', 'Dan'), new Pair('Ellen', 'Frank')],
      [new Pair('Alice', 'Frank'), new Pair('Bob', 'Cathy'), new Pair('Dan', 'Ellen')],
      [new Pair('Alice', 'Dan'), new Pair('Bob', 'Frank'), new Pair('Cathy', 'Ellen')],
      [new Pair('Alice', 'Cathy'), new Pair('Bob', 'Ellen'), new Pair('Dan', 'Frank')],
      [new Pair('Alice', 'Ellen'), new Pair('Bob', 'Dan'), new Pair('Cathy', 'Frank')]
    ];
    expect(scheduler(devs, pairs)).toEqual(expectedSchedules);
  });
});
