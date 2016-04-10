'use strict';

const Validator = require('validator');

let Ovt;

try {
  Ovt = require('ovt');
} catch (e) {
  console.log(`\u001b[31m
    You don't have module 'ovt' installed, please run command:
    \`npm install ovt --save\`
    to install the missing module.
    Otherwise 'ovt-plugin-validator' will not be activated.
  \u001b[39m`);
}

if (Ovt) {
  require('./lib/string')(Ovt, Validator);
}
