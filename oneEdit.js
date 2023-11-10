// One Edit
// Category: Strings Successful Submissions: 3,009+
// You're given two strings stringOne and stringTwo . Write a function that determines if these two strings can be made equal using only one edit.
// There are 3 possible edits:
// •
// Replace: One character in one string is swapped for a different character.
// • Add: One character is added at any index in one string.
// • Remove: One character is removed at any index in one string.
// Note that both strings will contain at least one character. If the strings are the same, your function should return true.
// Sample Input
// stringOne = "hello" stringTwo = "hollo"
// a and b
//abc and
// bb and a // false
// Sample Output
// True // A single replace at index 1 of either string can make the strings equal

function oneEdit(stringOne, stringTwo) {
  // aaa and aa
  let diff = Math.abs(stringOne.length - stringTwo.length);
  if (diff > 1) return false;
  // replace: compare length and if the same

  // for
  //add:

  //remove:
}

console.log(oneEdit("hello", "hollo")); //true
// hollow, yhollow
//5        7

// cata cat //true
// 4

//a, a //true
//a , b //true

//ab and b //true

//abc and abdd

//hello hollo
