const Validator = require('validator');

let Ovt;

try {
  Ovt = require('ovt');
} catch (e) {
  console.log(`
    You don't have 'ovt' installed, please run command:
    \`npm install ovt --save\`
    to install the missing module.
    Otherwise 'ovt-validator' will not be activated.
  `);
}

if (Ovt) {
  require('./lib/string')(Ovt, Validator);
}
