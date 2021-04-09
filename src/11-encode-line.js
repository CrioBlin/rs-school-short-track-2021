/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new Error('Not implemented');
  let newStr = str;
  let count = 0;
  let result = [];

  let state = true;
  while (state) {
    if (newStr.length === 0) {
      return newStr;
    }
    for (let i = 0; i < newStr.length; i++) {
      if (newStr[0] === newStr[i]) {
        count++;
        if (i === newStr.length - 1) {
          result.push(`${count}${newStr[0]}`);
          state = false;
        }
      } else {
        result.push(`${count}${newStr[0]}`);
        newStr = newStr.slice(i);
        count = 0;
        break;
      }
    }
  }
  result = result.join('').split('1').join('');
  return result;
}

module.exports = encodeLine;
