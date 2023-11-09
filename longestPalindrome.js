// Write a function that, given a string, returns its longest palindromic substring.
// A palindrome is defined as a string that's written the same forward and backward. Note that single-character strings are palindromes.
// You can assume that there will only be one longest palindromic substring.
// Sample Input
// string "abaxyzzyxf"
// Sample Output
// "xyzzyx"

string = "aba xyzzyxf";
//        a         f
//         b

function longestPalindromic(string) {
  if (string.length === 1) return string;
  let longest = "";
  for (let i = 0; i < string.length - 1; i++) {
    for (let j = i; j < string.length - 1; j++) {
      let substring = `${string[i]}${string[j]}`;
      console.log(substring, "substring");
      if (isPalindrome(substring)) {
        if (longest.length < substring.length) {
          longest === substring;
        }
      }
    }
  }
  return longest;
}

function isPalindrome(string) {
  let start = 0;
  let end = string.length - 1;
  while (start < end) {
    if (string[start] !== string[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}

// console.log(isPalindrome("xyzzyx"));
// console.log(isPalindrome("abc"));
console.log(longestPalindromic("abaxyzzyxf"));
// console.log(longestPalindromic("x"));
