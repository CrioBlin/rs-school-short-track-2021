/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // throw new Error('Not implemented');
  const arr1 = s1.split('').sort();
  const arr2 = s2.split('').sort();
  let result = 0;

  let state = true;
  while (state) {
    if (arr2.includes(arr1[0])) {
      arr2.splice(arr2.indexOf(arr1[0]), 1);
      result++;
    }
    arr1.splice(0, 1);
    if (arr1.length === 0) {
      state = false;
    }
  }

  return result;
}

module.exports = getCommonCharacterCount;
