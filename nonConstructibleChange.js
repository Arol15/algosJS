// Non-Constructible Change
// Given an array of positive integers representing the values of coins in your possession,
// write a function that returns the minimum amount of change (the minimum sum of money) that you cannot create.
// The given coins can have any positive integer value and aren't necessarily unique (i.e., you can have multiple coins of the same value).
// For example, if you're given coins = [1, 2, 5], the minimum amount of change that you can't create is 4. If you're given no coins, the minimum
// amount you can create is 1;

// In essence, the algorithm checks the coins one by one,
// updating the maximum amount that can be formed (min_change).
// If the next coin is greater than min_change + 1,
// we've found the smallest unachievable amount, and that's why we add 1 in the comparison.

function nonConstructibleChange(coins) {
  coins.sort((a, b) => a - b); //mutable
  let currrentSumCreated = 0;
  for (const coin of coins) {
    if (coin > currrentSumCreated + 1) {
      return currrentSumCreated + 1;
    }
    currrentSumCreated += coin;
  }
  return currrentSumCreated + 1;
}

console.log(nonConstructibleChange([1, 2, 10, 5]));
console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]));
