// Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).

// Input: low = 3, high = 7
// Output: 3
// Explanation: The odd numbers between 3 and 7 are [3,5,7].

// Input: low = 8, high = 10
// Output: 1
// Explanation: The odd numbers between 8 and 10 are [9]

const countOdds = (low, high) => {
    if (low % 2 !== 0) {
        low -= 1;
    }
    
    if (high % 2 !== 0) {
        high += 1;
    }

    return (high - low) / 2;
};

console.log(countOdds(3, 7), "-> 3");
console.log(countOdds(8, 10), "-> 1");
