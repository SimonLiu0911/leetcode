/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  const arr = Array.from(s);
  const sum = arr.reduce(
    (accumulator, currentValue, idx) => {
      const currentSymbolValue = roman[currentValue];
      const nextSymbolValue = roman[arr[idx + 1]];
      
      if (nextSymbolValue && currentSymbolValue < nextSymbolValue) return accumulator - currentSymbolValue;

      return accumulator + currentSymbolValue;
    },
    0
  )

  return sum
};

console.log(romanToInt('MCMXCIV'));