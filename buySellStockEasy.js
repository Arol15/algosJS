// leetocde Best time to Buy and Sell Stock #121
function maxProfit(prices) {
  let maxProfit = 0;
  let leftPointer = 0;
  let rightPointer = 1;

  while (rightPointer < prices.length) {
    if (prices[rightPointer] > prices[leftPointer]) {
      //1 and 7
      currentProfit = prices[rightPointer] - prices[leftPointer]; //4
      maxProfit = Math.max(currentProfit, maxProfit);
      // console.log(maxProfit);
      rightPointer++;
    } else {
      leftPointer = rightPointer;
      rightPointer++;
    }
  }

  return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])); //5
console.log(maxProfit([7, 4, 5, 3, 6, 19])); //16
console.log(maxProfit([7, 6, 4, 3, 1])); //0
