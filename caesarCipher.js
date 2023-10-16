// Given a non-empty string of lowercase letters and a non-negative integer representing a key, write a function that
//returns a new string obtained by shifting every letter in the input string by k positions in the alphabet, where k is the key.
// Note that letters should "wrap" around the alphabet; in other words, the letter z shifted by one returns the letter
// a
// Sample Input
// string = "xyz"
// key
// = 2
// Sample Output
// "zab"

function caesarCipher(string, k) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const result = [];
  let arrayString = string.split("");
  for (let i = 0; i < arrayString.length; i++) {
    let letter = string[i];
    let currentPosition = alphabet.indexOf(letter);

    // console.log(newKey, "what is new key");
    let newPosition = (currentPosition + k) % alphabet.length;
    // console.log(newPosition, "new position");
    result.push(alphabet.charAt(newPosition));
  }

  return result.join("");
}

function caesarCipher1(string, k) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const result = [];
  const obj = {};
  for (let i = 0; i < alphabet.length; i++) {
    if (!obj[i]) {
      obj[alphabet[i]] = i;
    }
  }

  for (let s of string) {
    let newKey = (obj[s] + k) % alphabet.length;
    // console.log(newKey);
    result.push(alphabet.charAt(newKey));
  }

  return result.join("");
}

console.log(caesarCipher1("xyz", 20)); //rst
console.log(caesarCipher1("abcd", 2)); //cde
