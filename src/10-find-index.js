/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  // throw new Error('Not implemented');
  let result = 0;
  let newLength = 0;

  // Loking from center of array
  function div(length) {
    if ((length / 2) > value) {
      div(length / 2);
    } else if (length < value) {
      return length;
    }
    return length;
  }

  if (array.length > 100) {
    newLength = div(array.length - 1);
  }

  for (let i = newLength; i < array.length; i++) {
    if (array[i] === value) {
      result = i;
      break;
    }
  }

  return result;
}

module.exports = findIndex;
