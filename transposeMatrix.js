function transposeMatrix(matrix) {
  //matrix.lenth will gives us how many rows we have
  const result = [];

  for (let col = 0; col < matrix[0].length; col++) {
    let newRow = [];
    for (let row = 0; row < matrix.length; row++) {
      newRow.push(matrix[row][col]);
    }
    result.push(newRow);
  }

  return result;
}

console.log(
  transposeMatrix([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);

console.log(
  transposeMatrix([
    [1, 4, 7], //1st row
    [2, 5, 8], //2nd row
    [3, 6, 9], //3rd row
  ])
);
