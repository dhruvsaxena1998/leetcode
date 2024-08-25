// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

const isAnagram = function (s, t) {
  const countCharacters = (str) => {
    const characters = [...str];

    const map = {};
    characters.forEach((character) => {
      if (map[character]) {
        map[character] += 1;
      } else {
        map[character] = 1;
      }
    });

    return map;
  };

  if (s.length !== t.length) {
    return false;
  }

  const charactersOfS = countCharacters(s);
  const charactersOfT = countCharacters(t);

  for (const c in charactersOfS) {
    const k = charactersOfT[c];
    if (k !== charactersOfS[c]) {
      return false;
    }
  }

  for (const c in charactersOfT) {
    const k = charactersOfS[c];
    if (k !== charactersOfT[c]) {
      return false;
    }
  }

  return true;
};

const isAnagramV2 = (s, t) => {
  if (s.length !== t.length) return false;

  const charCount = {};

  for (const c of s) {
    if (charCount[c]) {
      charCount[c] += 1;
    } else {
      charCount[c] = 1;
    }
  }

  for (const c of t) {
    // every character of t should already be in charCount
    if (!charCount[c]) {
      return false;
    }

    // Substracting character count if found
    charCount[c] -= 1;
  }

  // s -> add character count
  // t -> sub character count
  // aka : every character count should be exactly 0 to make it an anagram
  return Object.values(charCount).every((v) => v === 0);
};

console.log(isAnagramV2("anagram", "nagaram"), " -> true");
console.log(isAnagramV2("rat", "car"), " -> false");
