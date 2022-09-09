const hive = require('@alexbjr369/hive-common');
const prependFile = require('prepend-file');
const lerna = require('../../../lerna.json');
const pkg = require('../package.json');

const writeBanner = hive.banner(lerna.version, pkg.homepage, pkg.author);

prependFile('dist/hive.css', writeBanner);
prependFile('dist/hive.layout.css', writeBanner);
