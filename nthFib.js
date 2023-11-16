// The Fibonacci sequence is defined as follows: the first number of the sequence is 0,
//the second number is 1, and the nth number is the sum of the (n - 1)th and (n - 2)th numbers.
// Write a function that takes in an integer n and returns the nth Fibonacci number.
//Important note: the Fibonacci sequence is often defined with its first two numbers as F0 = 0 and F1 = 1.
// For the purpose of this question, the first Fibonacci number is FO;
//therefore, getNthFib(1) is equal to FO, getNthFib(2) is equal to F1, etc..
// Sample Input #1
// n = 2
// Sample Output #1
// 1 // 0, 1
// Sample Input #2
// n = 6
// Sample Output #2
// 5 // 0, 1, 1, 2, 3, 5
// n = 7
//

function getNthFib(n, memoize = { 1: 0, 2: 1 }) {
  //index 4
  // Write your code here.
  //0, 1, 1, 2, 3, 5, 8, 13, 21,
  // n- 1 + n - 2 == 1+2 = 3
  //5
  //

  if (typeof memoize[n] !== "undefined") {
    // console.log(memoize[n]); //
    //undefined // value
    return memoize[n];
  } else {
    memoize[n] = getNthFib(n - 1, memoize) + getNthFib(n - 2, memoize);
    return memoize[n];
  }

  //getNthFib(n, memoize = {1: 0, 2: 1}
  // return getNthFib(n - 1) + getNthFib(n - 2);
}

console.log(getNthFib(5));
