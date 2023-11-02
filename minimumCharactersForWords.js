// Write a function that takes in an array of words
//and returns the smallest array of characters needed to form all of the words.
//The characters don't need to be in any particular order.
// For example, the characters ["y", "r", "o", "u"] are needed to form the words
// ["your", "you", "or", "yo"] .
// Note: the input words won't contain any spaces; however,
//they might contain punctuation and/or special characters.
// Sample Input
// words = ["this", "that", "did", "deed", "them!", "a
// "]
// Sample Output
// ["t", "t", "h", "i", "s", "a", "d", "d", "e", "e", "m", "!"]
// The characters could be ordered differently.

function minimumCharactersForWords(words) {
  // 1. traverse the array
  // 2. create obj with key/value pairs => t: 4; t: 3
  // 3. create obj for each word and check the count of letter => this=> t: 1, h: 1, i: 1, s: 1
  //4. [key, value] = obj
  const result = [];
  const obj = {};
  for (let word of words) {
    const localObj = {}; //{ t: 1, h: 1, i: 1, s: 1 }
    for (let letter of word) {
      if (!localObj[letter]) {
        localObj[letter] = 1;
      } else {
        localObj[letter]++;
      }
      if (!obj[letter]) {
        obj[letter] = 1;
      } else if (obj[letter] < localObj[letter]) {
        obj[letter] = Math.max(obj[letter], localObj[letter]);
      }
    }
  }
  for (const [key, value] of Object.entries(obj)) {
    let index = 0;
    while (index < value) {
      result.push(key);
      index++;
    }
  }
  return result;
}

console.log(
  minimumCharactersForWords([
    "this",
    "that",
    "did",
    "deed",
    "them!",
    "aaaaaaaaa",
  ])
);
