function removeKDigits(num, digits) {
  const stack = []; //12324

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

  let result = stack.join("");
  return result ? String(Number(result)) : "0";
}

console.log(removeKDigits("462839", 2)); //2839
console.log(removeKDigits("462839", 3)); //239
console.log(removeKDigits("543210", 2)); //3210
console.log(removeKDigits("543210", 4)); //10
console.log(removeKDigits("123456", 4)); //12
console.log(removeKDigits("10200", 1)); //200
console.log(removeKDigits("010", 1)); //0
