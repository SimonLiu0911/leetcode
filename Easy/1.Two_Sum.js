/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const numMap = {}; // 用於存儲數字及其對應的索引

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    // 檢查目標值減去當前數字是否已存在於物件中。如果存在，表示找到了符合條件的兩個數字，第一個數字是在裡面的，第二個數字是當前正在計算的。
    if (complement in numMap) {
      // 取得已經在numMap裡的值的索引值 & 在索引i找到第二數字
      return [numMap[complement], i];
    }

    // 如果目標值減去當前數字不存在於物件中，則將當前數字及其索引存儲到物件中。
    numMap[nums[i]] = i;
  }
  // 若無解，返回空陣列或其他指定的值
  return [];
};

const nums = [5, 2, 4];
const target = 6;

/**
 * 5 = 6 - 1
 * 2 = 6 - 4
 * 4 = 6 - 2 (2已經在numMap裡面，因此找到第二個數字: 4)
 */
console.log(twoSum(nums, target));