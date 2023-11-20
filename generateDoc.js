// Generate Document
// You're given a string of available characters and a string representing
// a document that you need to generate.
// Write a function that determines if you can generate the document using the available characters.
// If you can generate the document, your function should return true; otherwise, it should return false.
// You're only able to generate the document if the frequency of
// unique characters in the characters string is greater than or equal to the frequency of unique characters in the document string.
// For example, if you're given characters = "abcabc" and document = "aabbccc" you cannot generate
// the document because you're missing one c.
// The document that you need to create may contain any characters, including special characters,
// capital letters, numbers, and spaces.
// Note: you can always generate the empty string ("").
// Sample Input
// characters = "Bste!hetsi ogEAxpelrt x document = "AlgoExpert is the Best!"
// Sample Output
// true

function generateDoc(chars, doc) {
  const obj = {};

  for (const char of chars) {
    if (!obj[char]) {
      obj[char] = 1;
    } else {
      obj[char]++;
    }
  }
  for (const letter of doc) {
    if (!obj[letter] || obj[letter] === 0) {
      return false;
    } else {
      obj[letter]--;
    }
  }
  return true;
}

console.log(generateDoc("abcabc", "aabbccc"));
console.log(generateDoc("Bste!hetsi ogEAxpelrt", "AlgoExpert is the Best!"));
