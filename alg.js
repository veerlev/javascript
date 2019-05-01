function reverseString(str) {
  let reversed = "";
  for (let i = str.length-1; i >= 0; i--){
    reversed += str[i];
  }
  return reversed;
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

function confirmEnding(str, target) {
  let regex = new RegExp(target + "$");
  return regex.test(str);
}

confirmEnding("Bastian", "n");

function repeatStringNumTimes(str, num) {
  let newStr = "";
  if (num < 1) {
    return newStr;
  }
  
  while (num >= 1){
    newStr += str;
    num--;
  }
  return newStr;
}

repeatStringNumTimes("abc", 3);
function truncateString(str, num) {
  if (str.length > num){
    str = str.slice(0, num) + "...";
  }
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

function findElement(arr, func) {
  for (let item of arr) {
    if (func(item)){
      return item;
    }
  }
  return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

function booWho(bool) {
  return (bool === true) || (bool === false);
}

booWho(null);



function titleCase(str) {
  
  let newStr = "";
  str = str.toLowerCase();
  let regex = /[a-z]/;
  let regex2 = /[a-z]|'/;
  if (regex.test(str[0])){
    newStr += str[0].toUpperCase();
  }
  let i = 1;
  let changeCase = false;
  while (i < str.length){
      let character = str[i];
      if (changeCase){
        newStr += character.toUpperCase();
        changeCase = false;
      } else {
        newStr += character;      }
      
      if (!regex2.test(character)){
        changeCase = true;
      }       
      i++;
  }
  return newStr;
}

titleCase("I'm a little tea pot");


function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let result = arr2.slice(0, n);
  result.push(...arr1);
  result.push(...arr2.slice(n, arr2.length));
  console.log(result);
  return result;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

function bouncer(arr) {
  let newArr = [];
  for (let item of arr){
    if (item) {
      newArr.push(item);
    }
  }
  return newArr;
}

bouncer([7, "ate", "", false, 9]);

function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  let position = 0;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] < num) {
      position++;
    }
  }
  return position;
}

getIndexToIns([10, 20, 30, 40, 50], 30);

function mutation(arr) {
  let sum = 0;
  let regex = /[a-z]/;
  let str1 = arr[0].toLowerCase();
  let str2 = arr[1].toLowerCase();
  for (let i = 0; i < str2.length; i++){
    let character = str2[i];
    if (regex.test(character) && !str1.includes(character)){
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);

function chunkArrayInGroups(arr, size) {
  let newArr = [];
  while (arr.length > size){
    let slice = arr.splice(0, size);
    newArr.push(slice);
  }
  newArr.push(arr);
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
