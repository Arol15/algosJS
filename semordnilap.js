// Write a function that takes in a list of unique strings and returns a list of semordnilap pairs.
// A semordnilap pair is defined as a set of different strings where the reverse of one word is the same as the forward
// version of the other. For example the words "diaper" and "repaid" are a semordnilap pair, as are the words "palindromes" and "semordnilap".
// The order of the returned pairs and the order of the strings within each pair does not matter.
// Sample Input
// words = ["diaper", "abc", "test", "cba", "repaid"]
// Sample Output
// [["diaper", "repaid"], ["abc", "cba"]]

function semordnilap(words) {
  const set = new Set(words);
  const result = [];

  for (let word of words) {
    let reverseWord = word.split("").reverse().join(""); //
    // console.log(reverseWord, "reverseword");
    // if (set.has(word))
    // if (word === reverseWord)
    const temp = [];
    // console.log(word === reverseWord);
    if (word === reverseWord) set.delete(word);
    if (set.has(reverseWord)) {
      temp.push(word, reverseWord);
      set.delete(word);
      result.push(temp);
    }
  }
  return result;
}

console.log(semordnilap(["diaper", "abc", "test", "cba", "repaid", "aba"]));
console.log(semordnilap(["aaa", "bbbb"])); //[]
console.log(semordnilap(["abcde", "bcd", "dcb", "edcba", "aaa"])); //  ["abcde", "edcba"], ["bcd", "dcb"]
