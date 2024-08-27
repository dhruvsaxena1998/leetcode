// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

// You must do it in place.

// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]

// Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

// Constrains:
// m == matrix.length
// n == matrix[0].length
// 1 <= m, n <= 200

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = (matrix) => {
  // const rows = Array(matrix.length).fill(false);
  // const cols = Array(matrix[0].length).fill(false);

  const rows = new Set();
  const cols = new Set();
  const m = matrix.length
  const n = matrix[0].length

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        rows.add(i);
        cols.add(j);
        // rows[i] = true;
        // cols[j] = true;
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (rows.has(i) || cols.has(j)) {
      // if (rows[i] || cols[j]) {
        matrix[i][j] = 0;
      }
    }
  }

  console.log(matrix);
};

/**
 * using set instead of array and defining length of array at the start to loop upto
 * can increase runtime as well as memory consumption
 */

setZeroes(
  [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ],
  console.log([
    [1, 0, 1],
    [0, 0, 0],
    [1, 0, 1],
  ])
);

setZeroes(
  [
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ],
  console.log([
    [0, 0, 0, 0],
    [0, 4, 5, 0],
    [0, 3, 1, 0],
  ])
);
