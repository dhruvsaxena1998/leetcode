// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Input = "race a car"
// Output: false
// Explanation: "raceacar

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

// s consists only of printable ASCII characters.

const isPalindrome = (s) => {
  const formattedString = s.toLowerCase().replace(/[^a-z0-9]+/g, "");

  let left = 0;
  let right = formattedString.length - 1;

  while (left < right) {
    if (formattedString[left] !== formattedString[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"), "-> true");
console.log(isPalindrome("race a car"), "-> false");
console.log(isPalindrome(" "), "-> true");
console.log(isPalindrome("a."), "-> true");
console.log(isPalindrome("ab_a"), "-> true");
