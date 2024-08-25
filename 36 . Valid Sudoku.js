// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

//    [["5","3",".",".","7",".",".",".","."]
// ,   ["6",".",".","1","9","5",".",".","."]
// ,   [".","9","8",".",".",".",".","6","."]
// ,   ["8",".",".",".","6",".",".",".","3"]
// ,   ["4",".",".","8",".","3",".",".","1"]
// ,   ["7",".",".",".","2",".",".",".","6"]
// ,   [".","6",".",".",".",".","2","8","."]
// ,   [".",".",".","4","1","9",".",".","5"]
// ,   [".",".",".",".","8",".",".","7","9"]
// ]
// Output: true

const isValidSudoku = (board) => {
  for (let r = 0; r < 9; r++) {
    const rowSet = new Set();
    for (let c = 0; c < 9; c++) {
      if (board[r][c] === ".") continue;
      if (rowSet.has(board[r][c])) return false;

      rowSet.add(board[r][c]);
    }

    const colSet = new Set();
    for (let c = 0; c < 9; c++) {
      if (board[c][r] === ".") continue;
      if (colSet.has(board[c][r])) return false;

      colSet.add(board[c][r]);
    }
  }

  for (let row = 0; row < 9; row += 3) {
    for (let col = 0; col < 9; col += 3) {
      const subGrid = new Set();

      for (let i = row; i < row + 3; i++) {
        for (let j = col; j < col + 3; j++) {
          if (board[i][j] === ".") continue;
          if (subGrid.has(board[i][j])) return false;

          subGrid.add(board[i][j]);
        }
      }
    }
  }

  return true;
};

console.log(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ]),
  "=> true"
);

console.log(
  isValidSudoku([
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ]),
  "=> false"
);

console.log(
  isValidSudoku([
    [".", ".", ".", ".", "5", ".", ".", "1", "."],
    [".", "4", ".", "3", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "3", ".", ".", "1"],
    ["8", ".", ".", ".", ".", ".", ".", "2", "."],
    [".", ".", "2", ".", "7", ".", ".", ".", "."],
    [".", "1", "5", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "2", ".", ".", "."],
    [".", "2", ".", "9", ".", ".", ".", ".", "."],
    [".", ".", "4", ".", ".", ".", ".", ".", "."],
  ]),
  "=> false"
);
