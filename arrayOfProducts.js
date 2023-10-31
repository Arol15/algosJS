//medium
function arrayOfProducts(numbers) {
  const result = [];

  let currentIndex = 0;
  while (currentIndex < numbers.length) {
    let currentSum = 1; 
    for (let i = 0; i < numbers.length; i++) {
      if (i !== currentIndex) {
        currentSum *= numbers[i]
      }
    }
    result.push(currentSum)
    currentIndex++
  }

  return result;
}

console.log(arrayOfProducts([5, 1, 4, 2])); //[8, 40, 10, 20]
