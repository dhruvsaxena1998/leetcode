// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Example 2:
// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

// Constraints
// -30 <= nums[i] <= 30

// Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

const productExceptSelf = (nums) => {
  // const products = [];

  // for (const [index] of elements.entries()) {
  //   const { [index]: selectedIndex, ...rest } = elements;

  //   const product = Object.values(rest).reduce((a, c) => {
  //     if (c === 0) return a * 1;
  //     else return a * c;
  //   }, 1);

  //   products.push(product);
  // }

  // return products;


  const pre = [];
  const post = [];

  for (let i = 0; i < nums.length; i++) {
    const preIndex = i - 1;
    const preI = pre[preIndex] ?? 1;
    pre[i] = nums[i] * preI;

    const postIndex = nums.length - 1 - i;
    const postI = post[postIndex + 1] ?? 1;
    post[postIndex] = nums[postIndex] * postI;
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = (pre[i - 1] ?? 1) * (post[i + 1] ?? 1);
  }

  return nums;
};

console.log(productExceptSelf([1, 2, 3, 4]), " -> [24,12,8,6]");
console.log(productExceptSelf([-1, 1, 0, -3, 3]), "-> [0,0,9,0,0]");
