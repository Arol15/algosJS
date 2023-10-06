function groupAnagrams(strs) {
  const obj = {};

  // for (let word of strs) {
  //   let sortedWord = word.split("").sort().join("");
  //   if (!obj[sortedWord]) {
  //     obj[sortedWord] = [];
  //   }
  // }

  for (let word of strs) {
    let sortedWord = word.split("").sort().join("");
    if (obj[sortedWord]) {
      obj[sortedWord].push(word);
    } else {
      obj[sortedWord] = [word];
    }
  }

  return Object.values(obj);
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
