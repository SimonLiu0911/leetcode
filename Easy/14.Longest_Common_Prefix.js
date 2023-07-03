/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  /**
   * Constraints:
   * 1 <= strs.length <= 200
   * 0 <= strs[i].length <= 200
   * strs[i] consists of only lowercase English letters.
   */
  if (strs.length === 0) return "";

  // 將第一個字串作為初始共同前綴
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    // 如果當前字串不是共同前綴的子字串，則將共同前綴不斷縮小
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
    }

    // 如果共同前綴已經為空字串，表示沒有共同前綴，直接返回
    if (prefix === "") return "";
  }

  return prefix;
};

longestCommonPrefix(["flower","flow","flight"])

/**
 * Note:
 * indexOf可以用在 array & string => array.indexOf() & string.indexOf()
 * 但 string 得到的覺果只會是 0 跟 -1
 * ex:
 * "flower".indexOf("flowe") // 0
 */