let arr = [1, 4, 6, 8, 9, 10, 15, 18, 20, 22, 25];
const binarySearch = (array, target) => {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (array[mid] == target) {
      return mid;
    }

    if (target > array[mid]) {
      low = mid + 1;
    }

    if (target < array[mid]) {
      high = mid - 1;
    }
  }

  return -1;
};

// 1. Empty array
console.log(binarySearch([], 10), "-> -1"); // Output: -1

// 2. Array with one element (target is the element)
console.log(binarySearch([5], 5), "-> 0"); // Output: 0

// 3. Array with one element (target is not the element)
console.log(binarySearch([5], 10), "-> -1"); // Output: -1

// 4. Target is at the first position
console.log(binarySearch([1, 3, 5, 7, 9], 1), "-> 0"); // Output: 0

// 5. Target is at the last position
console.log(binarySearch([1, 3, 5, 7, 9], 9), "-> 4"); // Output: 4

// 6. Target is not in the array
console.log(binarySearch([1, 3, 5, 7, 9], 6), "-> -1"); // Output: -1

// 7. Array with repeated elements (target exists)
console.log(binarySearch([1, 2, 2, 2, 3], 2), "-> 1|2|3"); // Output: 2 (or any valid index of 2)

// 8. Array with repeated elements (target does not exist)
console.log(binarySearch([1, 2, 2, 2, 3], 4), "-> -1"); // Output: -1

// 9. Very large array (testing performance edge case)
const largeArray = Array.from({ length: 1e6 }, (_, i) => i);
console.log(binarySearch(largeArray, 999999), "-> 999999"); // Output: 999999

// 10. Target is a negative number in a sorted array of negatives
console.log(binarySearch([-10, -8, -6, -4, -2], -6), "-> 2"); // Output: 2
