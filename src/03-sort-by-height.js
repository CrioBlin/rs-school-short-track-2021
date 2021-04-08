/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // throw new Error('Not implemented');
  const cacheArr = [...arr];
  let state = true;
  arr.sort((a, b) => a - b);

  while (state) {
    if (arr[0] === -1) {
      arr.splice(0, 1);
    } else {
      state = false;
    }
  }

  for (let i = 0; i < cacheArr.length; i++) {
    if (cacheArr[i] === -1) {
      arr.splice(i, 0, -1);
    }
  }

  return arr;
}

module.exports = sortByHeight;
