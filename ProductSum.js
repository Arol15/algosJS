// Write a function that takes in a "special" array and returns its product sum.
// A "special" array is a non-empty array that contains either integers or other "special" arrays. 
//The product sum of a "special" array is the sum of its elements, 
//where "special" arrays inside it are summed themselves and then multiplied by their level of depth.
// The depth of a "special" array is how far nested it is. For instance, 
//the depth of [] is 1; the depth of the inner array in [[]] is 2; the depth of t
// the inner array in [[]] is 2; the depth of the innermost array in [[[]]] is 3.
// Therefore, the product sum of [x, y] is x + y; 
//the product sum of [x, [y, z]] is x + 2 * (y + z); the product sum of [x, [y, [z]]] is x + 2 * (y + 3z) .
// Sample Input
// array = [5, 2, [7, -1], 3, [6, [-13, 81, 4]]]
// Sample Output
// 12 // calculated as: 5 + 2 + 2 * (7 − 1) + 3 + 2 * (6 + 3 ✶ (−13 + 8) + 4)

function productSum(array, multiplier=1) {
  let sum = 0; 
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      sum += productSum(array[i], multiplier+1)
    } else {
      sum += array[i]
    }
  }
  // console.log(sum)
  return multiplier * sum; 
}

console.log(productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]])) //12
// console.log(productSum())
