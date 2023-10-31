// Write a function that takes in a non-empty string and returns its run-length encoding.
// From Wikipedia, "run-length encoding is a form of lossless data compression in which runs 
//of data are stored as a single data value and count, rather than as the original run."
//For this problem, a run of data is any sequence of consecutive, identical characters. 
//So the run "AAA" would be run-length-encoded as "3A"
// To make things more complicated, however, the input string can contain all s
// sorts of special characters, including numbers. And since encoded data must be decodable, 
//this means that we can't naively run-length-encode long runs. 
//For example, the run "AAAAAAAAAAAA" (12 A s), can't naively be encoded as "12A", 
//since this string can be decoded as either "AAAAAAAAAAAA" or "1AA". 
//Thus, long runs (runs of 10 or more characters) should be encoded in a split fashion; 
//he aforementioned run should be encoded as "9A3A"
// Sample Input
// string = "AAAAAAAAAAAAABBCCCCDD"

function runLengthEncoding(string) {

  let result = [];

  let count = 1; 

  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i+1] && count < 9) {
      count++;
    } else {
      result.push(count, string[i])
      count = 1; 
    }
  }

  return result.join(''); 
}

console.log(runLengthEncoding("AAAAAAAAAAAAABBCCCCDD")) //9A4A2B4C2D
console.log(runLengthEncoding("aA")) //1a1A
console.log(runLengthEncoding("12233")) //1a1A
