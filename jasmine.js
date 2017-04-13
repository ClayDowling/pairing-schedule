const Jasmine = require('jasmine');
const jasmine = new Jasmine();

jasmine.loadConfig({
  spec_dir: 'src',
  spec_files: [
    '**/*.unit.js'
  ]
});

jasmine.execute();
