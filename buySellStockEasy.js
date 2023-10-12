// leetocde Best time to Buy and Sell Stock #121
function maxProfit(prices) {
  let maxProfit = 0;
  let leftPointer = 0;
  let rightPointer = 1;

  while (rightPointer < prices.length) {
    if (prices[rightPointer] > prices[leftPointer]) {
      maxProfit = prices[rightPointer] - prices[leftPointer];
      console.log(maxProfit);
      rightPointer++;
    } else {
      rightPointer++;
      leftPointer++;
    }
  }

  return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])); //4
// console.log(maxProfit([7, 6, 4, 3, 1])); //0
