'use strict';

var expect = require('chai').expect;
var ovt = require('ovt');
var validator = require('validator');
ovt.plugin(require('../'));

var schema = ovt.string();

describe('ovt-plugin-validator', function() {
  [
    // validators
    'contains',
    'isAfter',
    'isAlpha',
    'isAlphanumeric',
    'isAscii',
    'isBase64',
    'isBefore',
    'isBoolean',
    'isByteLength',
    'isCreditCard',
    'isCurrency',
    'isDate',
    'isDecimal',
    'isDivisibleBy',
    'isEmail',
    'isFQDN',
    'isFloat',
    'isFullWidth',
    'isHalfWidth',
    'isHexColor',
    'isHexadecimal',
    'isIP',
    'isISBN',
    'isISIN',
    'isISO8601',
    'isIn',
    'isInt',
    'isJSON',
    'isLength',
    'isLowercase',
    'isMACAddress',
    'isMobilePhone',
    'isMongoId',
    'isMultibyte',
    'isNumeric',
    'isSurrogatePair',
    'isURL',
    'isUUID',
    'isUppercase',
    'isVariableWidth',
    'isWhitelisted',
    'matches'
  ].forEach(function(name) {
    it(`should have ${name} validator for string type`, function() {
      expect(schema[name]).to.be.a('function');
      expect(validator[name]).to.be.a('function');
    });
  });

  [
    // sanitizers
    'blacklist',
    'unescape',
    'normalizeEmail',
    'stripLow',
    'whitelist'
  ].forEach(function(name) {
    it(`should have ${name} sanitizer for string type`, function() {
      expect(schema[name]).to.be.a('function');
      expect(validator[name]).to.be.a('function');
    });
  });
});
