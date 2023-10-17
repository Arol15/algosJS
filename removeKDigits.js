function removeKDigits(num, digits) {
  const stack = []; //4 6

  for (let n of num) {
    while (digits > 0 && stack.length > 0 && n < stack[stack.length - 1]) {
      stack.pop();
      digits--;
    }
    stack.push(n);
  }

  while (stack.length > stack.length - digits) {
    stack.pop();
    digits--;
  }

  return stack.join("");
}

console.log(removeKDigits("462839", 2)); //2839
console.log(removeKDigits("462839", 3)); //239
console.log(removeKDigits("543210", 2)); //3210
console.log(removeKDigits("543210", 4)); //10
console.log(removeKDigits("123456", 4)); //12
