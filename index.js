const buildPairs = require('./src/build-pairs/build-pairs');

const pairs = buildPairs(['Aqil-Nate', 'Clay', 'Edwin', 'Paul', 'Ritesh', 'Ryan']);

for (var i = 0; i < pairs.length; i++) console.log(pairs[i].pair);
