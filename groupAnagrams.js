function groupAnagrams(strs) {
  const obj = {};

  for (let word of strs) {
    let sortedWord = word.split("").sort().join("");
    if (!obj[sortedWord]) {
      obj[sortedWord] = [];
    }
  }

  for (let word of strs) {
    if (obj[word.split("").sort().join("")]) {
      obj[word.split("").sort().join("")].push(word);
    }
  }

  return Object.values(obj);
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
