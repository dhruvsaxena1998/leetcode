// Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.

// implement encode and decode

// Input: ["lint","code","love","you"]
// Output: ["lint","code","love","you"]

// Input: ["we", "say", ":", "yes"]
// Output: ["we", "say", ":", "yes"]

// Encoded string can be generated in any way (assuming we have no constraint of value in input array)

const encode = (strs) => {
  let result = "";

  for (const str of strs) {
    const l = str.length;
    result += `${l}#${str}`;
  }

  return result;
};

const decode = (str) => {
  let result = [];
  let i = 0;

  while (i < str.length) {
    let j = i;

    while (str[j] !== "#") j++;

    let length = parseInt(str.substring(i, j), 10);
    i = j + 1;
    j = i + length;
    result.push(str.substring(i, j));
    i = j;
  }

  return result;
};

console.log(decode(encode(["hello", "world"])), "->", '["hello", "world"]');
console.log(decode(encode(["", ""])), "->", '["", ""]');
console.log(decode(encode(["a", ""])), "->", '["a", ""]');
console.log(decode(encode([])), "->", "[]");
console.log(decode(encode(["a", "b", "c"])), "->", '["a", "b", "c"]');
console.log(
  decode(encode(["longstring", "12345", "!@#$%"])),
  "->",
  '["longstring", "12345", "!@#$%"]'
);
console.log(
  decode(encode(["longstring", "12", "#hh#hh3"])),
  "->",
  '["longstring", "12", "#hh#hh3"]'
);
