function reverseString(str) {
  let reversed = "";
  for (let i = str.length-1; i >= 0; i--){
    reversed += str[i];
  }
  str = reversed;
  return str;
}

reverseString("hello");

function factorialize(num) {
  if (num <= 1) {
    return 1;
  } 
  return num * factorialize(num - 1);
}

factorialize(5);

function findLongestWordLength(str) {
  let maxLength = 0;
  let position = 0;
  let regex = /[a-z]/i;
  while (position < str.length){
    while (position < str.length && !regex.test(str[position])){
      position++;
    }
    let currentLength = position;
    while (currentLength < str.length && regex.test(str[currentLength])){
      currentLength++;
    }
    currentLength -= position;
    position += currentLength;
    if (maxLength < currentLength){
      maxLength = currentLength;
    }
  }
  return maxLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

function largestOfFour(arr) {
  let maxArr = [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY];
  let secondDimension = 4;
  for (let i = 0; i < arr[0].length; i++){
    for (let j = 0; j < secondDimension; j++){
        if (arr[j][i] > maxArr[j]) {
          maxArr[j] = arr[j][i];
        }
    }   
  }
  return maxArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
