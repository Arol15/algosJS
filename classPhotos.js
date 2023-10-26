function classPhotos(redShirts, blueShirts) {
  redShirts.sort((a, b) => a - b); // 1, 3, 4, 5, 8
  blueShirts.sort((a, b) => a - b); // 2, 4, 5, 6, 9

  let firstRow = [];
  let secondRow = [];

  if (redShirts[0] > blueShirts[0]) {
    firstRow = [...blueShirts];
    secondRow = [...redShirts];
  } else {
    firstRow = [...redShirts];
    secondRow = [...blueShirts];
  }

  for (let i = 0; i < firstRow.length; i++) {
    console.log(firstRow);
    console.log(secondRow);
    if (firstRow[i] > secondRow[i]) {
      console.log(firstRow[i]);
      console.log(secondRow[i]);
      return false;
    }
  }
  // console.log(firstRow);
  return true;
}

console.log(classPhotos([5, 8, 1, 3, 14], [6, 9, 2, 4, 5])); //true
// console.log(classPhotos());

// def classPhotos(redShirtHeights, blueShirtHeights):
//     # Write your code here.
//     redShirtHeights.sort(reverse=True)
//     blueShirtHeights.sort(reverse=True)

//     shirtColorInFirstRow = "RED" if redShirtHeights[0] < blueShirtHeights[0] else "BLUE"

//     for idx in range(len(redShirtHeights)):
//       if shirtColorInFirstRow == "RED":
//         if redShirtHeights[idx] >= blueShirtHeights[idx]:
//           return False
//       elif shirtColorInFirstRow == "BLUE":
//         if blueShirtHeights[idx] >= redS
