/**

Given an array of strings strs, group the anagrams together.
You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
typically using all the original letters exactly once.

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Input: strs = [""]
Output: [[""]]

Input: strs = ["a"]
Output: [["a"]]

*/

const groupAnagrams = (strings) => {
  const hashMap = new Map();

  for (const string of strings) {
    const hash = string.split("").sort().join();

    if (hashMap.has(hash)) {
      hashMap.set(hash, [...hashMap.get(hash), string]);
    } else {
      hashMap.set(hash, [string]);
    }
  }

  return Array.from(hashMap.values());
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));
