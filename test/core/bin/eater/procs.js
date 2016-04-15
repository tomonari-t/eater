const cp = require('child_process');
const assert = require('power-assert');

const result = cp.execSync(`${process.cwd()}/bin/eater.js --mode tap --dir test/fixture/ --ext success.js --procs 10`).toString();

assert(result.indexOf(`1..1`) !== -1);
assert(result.indexOf(`ok test/fixture/success.js`) !== -1);



