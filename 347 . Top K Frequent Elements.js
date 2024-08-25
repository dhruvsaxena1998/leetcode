// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Example 2:
// Input: nums = [1], k = 1
// Output: [1]

const topKFrequent = (nums, k) => {
  const characterCount = {};
  nums.forEach((num) => {
    if (characterCount[num]) characterCount[num] += 1;
    else characterCount[num] = 1;
  });

  const counts = Object.entries(characterCount).sort((a, b) => b[1] - a[1]);

  const topFrequents = [];

  for (let i = 0; i < k; i++) {
    topFrequents.push(counts[i][0]);
  }

  return topFrequents;
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2), "-> [1, 2]");
console.log(topKFrequent([1], 1), "-> [1]");
console.log(topKFrequent([7, 7], 1), "-> [7]");
