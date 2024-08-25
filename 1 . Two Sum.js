// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.

// You can return the answer in any order.

// Example 1
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

const twoSum = (nums, target) => {
  // if target is present; there should be a way to generate it with nums
  // don't use same index (element) twice.

  // loop nums:
  // target - i = v (find if v is there in nums)
  // if found: return the index of [i, v]
  // else: go to next element

  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const v = target - nums[i];

    if (map[v] !== undefined) {
      return [map[v], i];
    }

    map[nums[i]] = i;
  }
};

console.log(twoSum([2, 7, 11, 15], 9), "[0, 1]");
console.log(twoSum([3, 2, 4], 6), "[1,2]");
console.log(twoSum([3, 3], 6), "[0,1]");
