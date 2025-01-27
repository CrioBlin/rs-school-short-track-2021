/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new Error('Not implemented');
  let temp = n.toString().split('').map(Number);
  const result = n.toString().split('').map(Number);
  temp = temp.sort();
  result.splice(result.indexOf(temp[0]), 1);

  return Number(result.join(''));
}

module.exports = deleteDigit;
