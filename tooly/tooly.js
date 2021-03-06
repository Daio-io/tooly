'use strict';

/**
 * Checks the existence of a value
 * @param value - value to check exists
 * @returns {boolean}
 */
function existy(value) {

  if (typeof value === 'string') {
    return value !== 'null'
      && value !== ''
      && value !== 'undefined';
  }
  return value != null;

}

/**
 * Checks the existence of a value. If it does not exist it returns a desired default.
 * @param value - value to check exists
 * @param defaultValue - value to return if provided value does not exist
 * @returns {Object} - The original value supplied or the default value if original value does not exist
 */
function defaulty(value, defaultValue) {

  if (existy(value)) {
    return value;
  }
  return defaultValue;

}

/**
 * Removes all characters which should not be included in singular words
 * @param value {string} - value to remove characters from
 * @returns {*|XML|string|void}
 */
function cleansey(value) {

  if (typeof value === 'string') {

    return value.replace(/[^ a-zA-Z-]/g, '');

  }

  return '';

}

/**
 * Removes any string value from another string
 * @param remove
 * @param value
 * @returns {string} - the new string | empty if not a string
 */
function removey(remove, value) {

  if (typeof remove === 'string' &&
    typeof value === 'string') {

    return value.replace(remove, '');

  }

  return '';

}

/**
 * Clips the end of the string so that the new length is the clipLength
 * @param clippable {string} - string to clip
 * @param clipLength {number} - amount the string should be clipped by
 * @returns {string}
 */
function clippy(clippable, clipLength) {

  if (typeof clippable === 'string' &&
    typeof clipLength === 'number') {

    clipLength = clipLength < 0 ? 0 : clipLength;

    return clippable.slice(0, clipLength);

  }

  return '';

}

/**
 * Safely converts any string value number to an integer value of that string.
 * Rounds float values to integer
 * @param stringInt {string} - string to convert to int
 * @returns {int}
 */
function inty(stringInt) {

  var converted = parseInt(stringInt);

  if (!isNaN(converted)) {
    return converted;
  }

  return 0;

}

/**
 * Safely converts any string value number to an float value of that string.
 * This also works for the same as inty(), except it will not round when supplied with a float
 * @param stringFloat {string} - string to convert to float
 * @returns {float}
 */
function floaty(stringFloat) {

  var converted = parseFloat(stringFloat);

  if (!isNaN(converted)) {
    return converted;
  }

  return 0;

}

module.exports = {

  existy: existy,
  defaulty: defaulty,
  cleansey: cleansey,
  removey: removey,
  clippy: clippy,
  inty: inty,
  floaty: floaty

};
