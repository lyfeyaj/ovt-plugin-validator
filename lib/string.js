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

  Ovt.registerLocale('en', {
    string: {
      contains: 'must contain {{0}}',
      isAfter: 'is not after {{0}}',
      isAlpha: 'can only contains letters',
      isAlphanumeric: 'can only contains letters and numbers',
      isAscii: 'can only contains ASCII chars',
      isBase64: 'is not base64 encoded',
      isBefore: 'is not before {{0}}',
      isBoolean: 'is not a boolean',
      isByteLength: 'length must be less than {{max}} and longer than {{min}}',
      isCreditCard: 'is not a valid credit card',
      isCurrency: 'is not a valid currency amount',
      isDate: 'is not a valid date',
      isDecimal: 'is not a valid decimal',
      isDivisibleBy: 'is not divisible by {{0}}',
      isEmail: 'is not a valid email',
      isFQDN: 'is not a valid fully qualified domain name',
      isFloat: 'is not a valid float',
      isFullWidth: 'not contains any full-width chars',
      isHalfWidth: 'not contains any half-width chars',
      isHexColor: 'is not valid a hexadecimal color',
      isHexadecimal: 'is not a valid hexadecimal number',
      isIP: 'is not a valid ip',
      isISBN: 'is not a valid ISBN',
      isISIN: 'is not a valid ISIN',
      isISO8601: 'is not a valid ISO8601 date',
      isIn: 'must be one of "{{flattenedArgs}}"',
      isInt: 'is not a valid integer',
      isJSON: 'is not valid json',
      isLength: 'length must be less than {{max}} and longer than {{min}}',
      isLowercase: 'is not lower case',
      isMACAddress: 'is not a valid MAC address',
      isMobilePhone: 'is not a valid mobile phone number',
      isMongoId: 'is not a valid mongoid',
      isMultibyte: 'not contains any multibyte chars',
      isNull: 'must be null',
      isNumeric: 'must contains only numbers',
      isSurrogatePair: 'not contains any surrogate pairs chars',
      isURL: 'is not a valid url',
      isUUID: 'is not a valid uuid',
      isUppercase: 'is not upper case',
      isVariableWidth: 'not contains a mixture of full and half-width chars',
      isWhitelisted: 'is not whitelisted',
      matches: 'is not matched specificed pattern'
    }
  });

  Ovt.registerLocale('zh-CN', {
    string: {
      contains: '必须包含{{0}}',
      isAfter: '需要在{{0}}之后',
      isAlpha: '只允许字母',
      isAlphanumeric: '只允许数字和字母',
      isAscii: '只允许ASCII字符',
      isBase64: '不是一个有效的base64编码',
      isBefore: '需要在{{0}}之前',
      isBoolean: '不是一个有效的布尔值',
      isByteLength: '长度应大于{{min}}个字节, 小于{{max}}个字节',
      isCreditCard: '无效',
      isCurrency: '不是一个有效的金额',
      isDate: '无效',
      isDecimal: '不是一个有效的十进制数字',
      isDivisibleBy: '不能被{{0}}整除',
      isEmail: '无效',
      isFQDN: '无效',
      isFloat: '不是一个有效的数字',
      isFullWidth: '没有包含任何全角字符',
      isHalfWidth: '没有包含任何半角字符',
      isHexColor: '不是一个有效的十六进制颜色',
      isHexadecimal: '不是一个有效的十六进制数字',
      isIP: '不是一个有效的IP地址',
      isISBN: '不是一个有效的ISBN',
      isISIN: '不是一个有效的ISIN',
      isISO8601: '不是一个有效的ISO8601日期',
      isIn: '只能是 "{{flattenedArgs}}" 其中之一',
      isInt: '不是一个有效的正整数',
      isJSON: '不是一个有效的JSON字符串',
      isLength: '长度应大于{{min}}个字, 小于{{max}}个字',
      isLowercase: '不是小写的',
      isMACAddress: '不是一个有效的 MAC 地址',
      isMobilePhone: '无效',
      isMongoId: '不是一个有效的 MongoDB ID',
      isMultibyte: '没有包含任何多字节字符',
      isNull: '必须为空值',
      isNumeric: '只能包含数字',
      isSurrogatePair: '没有包含任何UTF-16编码代理对',
      isURL: '不是一个有效的链接',
      isUUID: '不是一个有效的UUID',
      isUppercase: '不是大写的',
      isVariableWidth: '必须同时包含全角和半角字符',
      isWhitelisted: '不在白名单中',
      matches: '不匹配'
    }
  });
};
