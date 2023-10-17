/*

Write a function that takes a positive integer represented as a string number and an integer numDigits. 
Remove numDigits from the string so that the number represented by the string is as large as possible afterwards.
Note that the order of the remaining digits cannot be changed. 
You can assume numDigits will always be less than the length of number and greater than or equal to 0.

*/

function bestDigits(num, numDigits) {
  // 462839 //2
  const stack = []; // 68

  for (let n of num) {
    //8
    while (
      numDigits > 0 &&
      stack.length > 0 &&
      Number(n) > stack[stack.length - 1] // 6 > 4???
    ) {
      stack.pop();
      numDigits -= 1;
    }
    stack.push(Number(n));
  }

  while (stack.length > stack.length - numDigits) {
    stack.pop();
    numDigits--;
  }
  return stack.join("");
}

console.log(bestDigits("462839", 2)); //6839
console.log(bestDigits("462839", 3)); //839
console.log(bestDigits("543210", 2)); //5432
console.log(bestDigits("543210", 4)); //54
