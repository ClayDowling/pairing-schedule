const buildPairs = require('./src/build-pairs/build-pairs');
const scheduler = require('./src/scheduler/scheduler.js');
const candidates = require('./candidates.json');
const pairs = buildPairs(candidates);

for (var i = 0; i < pairs.length; i++) console.log(pairs[i].pair);
