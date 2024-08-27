// Question: Write a function that splits an array into chunks of a given size.

// Example:
// Input: ([1, 2, 3, 4, 5, 6, 7, 8], 3)
// Output: [[1, 2, 3], [4, 5, 6], [7, 8]]

// Expected Solution:Use a loop or Array.prototype.slice() to extract chunks.

// Consider how to handle cases where the array can't be evenly divided by the chunk size.

const toChunks = (array, chunkSize = 3) => {
  const chunkedArray = [];

  for (let i = 0; i < array.length; i += chunkSize) {
    const newArray = array.slice(i, i + chunkSize);

    chunkedArray.push(newArray);
  }

  return chunkedArray;
};

console.log(toChunks([1, 2, 3, 4, 5, 6, 7, 8], 6));
