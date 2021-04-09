/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  // throw new Error('Not implemented');
  let digit = n.toString().split('').map(Number);
  let result = 0;
  let state = true;

  while (state) {
    let temp = 0;
    if (digit.length > 1) {
      digit.forEach((e) => {
        temp += e;
      });

      digit = temp.toString().split('').map(Number);
      result = temp;
    } else {
      state = false;
    }
  }
  return result;
}

module.exports = getSumOfDigits;
