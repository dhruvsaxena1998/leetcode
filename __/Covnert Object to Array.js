// Question: Implement a function that converts an object into an array of key-value pairs.

// Example:
// Input: { a: 1, b: 2, c: 3 }
// Output: [["a", 1], ["b", 2], ["c", 3]]

// Expected Solution:
// Use Object.entries() for explanation,
// create a custom Object.entries functionality manually iterate over the object's properties.

const convertToArray = (record) => {
  const array = [];

  for (const key in record) {
    if (record.hasOwnProperty(key)) array.push([key, record[key]]);
  }

  return array;
};

const obj = {
  a: 1,
  b: 3,
  c: 3,
};

obj.__proto__.d = 4;
Object.prototype.e = 5;

console.log(convertToArray(obj));
