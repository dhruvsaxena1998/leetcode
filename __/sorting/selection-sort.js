const sort = (nums) => {
  return nums.sort((a, b) => a - b);
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const selection_sort = (nums) => {
  // select minimum and swap positions
  // whichever is at (i) swaps positions with minimum

  const len = nums.length;
  for (let i = 0; i <= len - 2; i++) {
    let mini = i;
    for (let j = i; j <= len - 1; j++) {
      if (nums[j] < nums[mini]) {
        mini = j;
      }
    }
    let temp = nums[mini];
    nums[mini] = nums[i];
    nums[i] = temp;
  }
  return nums;
};

console.log(
  selection_sort([1, 6, 5, 8, 3, 22]).toString(),
  "->",
  sort([1, 6, 5, 8, 3, 22]).toString()
);
