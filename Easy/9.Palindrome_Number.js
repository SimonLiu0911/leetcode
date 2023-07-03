/**
 * 1. 長度一定要是奇數
 * 2. 依序檢查：
 *    第一個跟最後一個
 *    第二個跟倒數第二個
 *    ...
 */

var isPalindrome = function (x) {
  const str = x.toString();
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) return false;

    left++;
    right--;
  }

  return true
};