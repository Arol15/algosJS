function validSequence(array, sequence) {
  let arrayIndex = 0;
  let sequenceIndex = 0;

  //very important to check both arrays to avoid infinite loop
  while (arrayIndex < array.length && sequenceIndex < sequence.length) {
    if (array[arrayIndex] === sequence[sequenceIndex]) {
      sequenceIndex++;
    }
    arrayIndex++;
  }
  return sequence.length === sequenceIndex;
}

console.log(validSequence([1, 3, 6, 7, 9], [1, 6, 9])); //true
console.log(validSequence([1, 5, 7, 9], [3, 7, 10])); //false
