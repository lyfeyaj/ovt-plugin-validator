'use strict';

module.exports = function ObjectExtention(Ovt, Validator) {

  [
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
    'isNull',
    'isNumeric',
    'isSurrogatePair',
    'isURL',
    'isUUID',
    'isUppercase',
    'isVariableWidth',
    'isWhitelisted',
    'matches'
  ].forEach(function(name) {
    Ovt.addMethod('string', name, function() {
      let validator = Validator[name];
      return validator.apply(Validator, arguments);
    });
  });

  // Add sanitizers for StringType
  [
    'blacklist',
    'unescape',
    'normalizeEmail',
    'stripLow',
    'whitelist'
  ].forEach(function(name) {
    Ovt.addMethod('string', name, function() {
      let validator = Validator[name];
      return validator.apply(Validator, arguments);
    }, { type: 'sanitizer' });
  });
};
