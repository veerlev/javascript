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
