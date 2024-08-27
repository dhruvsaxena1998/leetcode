/**

Given an integer array nums, return true if any value appears at least twice in the array,
and return false if every element is distinct.

Example 1:
Input: nums = [1,2,3,1]
Output: true

Example 2:
Input: nums = [1,2,3,4]
Output: false

Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

*/

const containsDuplicate = (nums) => {
  /**
   * loop over nums:
   *  -> we check if num is already present in x
   *     -> return true as we have found a value twice
   *  -> return false
   */

  const distinctValues = new Set();
  
  // for..of -> iterates with values
  // for..in -> iterates with index      
  for (const num of nums) {
    if (distinctValues.has(num)) {
      return true;
    }

    distinctValues.add(num);
  }

  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]), "-> true");
console.log(containsDuplicate([1, 2, 3, 4]), "-> false");
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), "-> true");
