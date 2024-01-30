// var twoSum = function (nums, target) {
//   let dict = new Object();
//   for (let i = 0; i < nums.length; i++) {
//     const second = target - nums[i];
//     if (dict[second.toString()] >= 0) {
//       return [i, dict[second]];
//     }
//     dict[nums[i]] = i;
//   }
//   return [];
// };

// var twoSum = function (nums, target) {
//   let dict = [];
//   let i = 0;
//   for (let num of nums) {
//     const second = target - num;
//     if (dict.indexOf(second) >= 0) return [i, dict.indexOf(second)];
//     dict.push(num);
//     i++;
//   }
//   return [];
// };

var twoSum = function (nums, target) {
  let dict = new Object();
  for (let i = 0; i < nums.length; i++) {
    const second = target - nums[i];
    if (dict[second] >= 0) {
      return [dict[second], i];
    }
    dict[nums[i]] = i;
  }
  return [];
};

console.log(twoSum([2, 7, 11, 15], 9));
