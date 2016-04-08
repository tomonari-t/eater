const cp = require('child_process');
const assert = require('power-assert');

const result = cp.execSync(`${process.cwd()}/bin/eater.js --help`).toString();
assert(result.indexOf(`eater [--dir test directroy default 'test/'] [--ext test file extension default '.js'] [--mode test report mode]`) !== -1);

