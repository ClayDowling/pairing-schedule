const scheduler = require('./scheduler');

describe('Scheduler', () => {
  it('produces one pairing combinations from a list of two', () => {
    const developers = ['Alice', 'Bob'];
    const pairings = ['Alice/Bob'];
    expect(scheduler(developers)).toEqual(pairings);
  });
  // it('produces all pairing combinations from a list of four', () => {
  //   const developers = ['Alice', 'Bob', 'Cathy', 'Dan'];
  //   const pairings = ['Alice/Bob,Cathy/Dan', 'Alice/Cathy,Bob/Dan', 'Alice/Dan,Bob/Cathy'];
  //   expect(scheduler(developers)).toEqual(pairings);
  // });
});
