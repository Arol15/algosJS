function topKFrequent(nums, k) {
  const obj = {};

  for (let num of nums) {
    if (!obj[num]) {
      obj[num] = 1;
    } else {
      obj[num]++;
    }
  }

  const result = [];
  for (let [key, value] of Object.entries(obj)) {
    result.push([Number(key), value]);
  }

  const sortedResult = result.sort((a, b) => b[1] - a[1]);

  const answer = [];

  for (let i = 0; i < k; i++) {
    answer.push(sortedResult[i][0]);
  }

  return answer;
}

//time - O n logn because of the sort
//space o(n)

console.log(topKFrequent([1, 1, 1, 2, 2, 3, 3, 7, 7, 7, 7], 2));
