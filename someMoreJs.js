
var fixedValue = 4;
function incrementer (value) {
  return ++value;
 
}

var newValue = incrementer(fixedValue); // Should equal 5
console.log(fixedValue);


// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

/* This function should add a book to the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function add (bookList, bookName) {
  let aList = [...bookList];
  aList.push(bookName);
  return aList;
  
  // Add your code above this line
}

/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function remove (bookList, bookName) {
 let aList = [];
 for (let i = 0; i < bookList.length; i++){
   if (bookList[i] !== bookName){
     aList.push(bookList[i]);
   }    
 }
   return aList;
    // Add your code above this line
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');


// the global variable
var watchList = [
                 {  
                   "Title": "Inception",
                   "Year": "2010",
                   "Rated": "PG-13",
                   "Released": "16 Jul 2010",
                   "Runtime": "148 min",
                   "Genre": "Action, Adventure, Crime",
                   "Director": "Christopher Nolan",
                   "Writer": "Christopher Nolan",
                   "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
                   "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
                   "Language": "English, Japanese, French",
                   "Country": "USA, UK",
                   "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
                   "Metascore": "74",
                   "imdbRating": "8.8",
                   "imdbVotes": "1,446,708",
                   "imdbID": "tt1375666",
                   "Type": "movie",
                   "Response": "True"
                },
                {  
                   "Title": "Interstellar",
                   "Year": "2014",
                   "Rated": "PG-13",
                   "Released": "07 Nov 2014",
                   "Runtime": "169 min",
                   "Genre": "Adventure, Drama, Sci-Fi",
                   "Director": "Christopher Nolan",
                   "Writer": "Jonathan Nolan, Christopher Nolan",
                   "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
                   "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
                   "Language": "English",
                   "Country": "USA, UK",
                   "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
                   "Metascore": "74",
                   "imdbRating": "8.6",
                   "imdbVotes": "910,366",
                   "imdbID": "tt0816692",
                   "Type": "movie",
                   "Response": "True"
                },
                {
                   "Title": "The Dark Knight",
                   "Year": "2008",
                   "Rated": "PG-13",
                   "Released": "18 Jul 2008",
                   "Runtime": "152 min",
                   "Genre": "Action, Adventure, Crime",
                   "Director": "Christopher Nolan",
                   "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
                   "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
                   "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
                   "Language": "English, Mandarin",
                   "Country": "USA, UK",
                   "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
                   "Metascore": "82",
                   "imdbRating": "9.0",
                   "imdbVotes": "1,652,832",
                   "imdbID": "tt0468569",
                   "Type": "movie",
                   "Response": "True"
                },
                {  
                   "Title": "Batman Begins",
                   "Year": "2005",
                   "Rated": "PG-13",
                   "Released": "15 Jun 2005",
                   "Runtime": "140 min",
                   "Genre": "Action, Adventure",
                   "Director": "Christopher Nolan",
                   "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
                   "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
                   "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
                   "Language": "English, Urdu, Mandarin",
                   "Country": "USA, UK",
                   "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
                   "Metascore": "70",
                   "imdbRating": "8.3",
                   "imdbVotes": "972,584",
                   "imdbID": "tt0372784",
                   "Type": "movie",
                   "Response": "True"
                },
                {
                   "Title": "Avatar",
                   "Year": "2009",
                   "Rated": "PG-13",
                   "Released": "18 Dec 2009",
                   "Runtime": "162 min",
                   "Genre": "Action, Adventure, Fantasy",
                   "Director": "James Cameron",
                   "Writer": "James Cameron",
                   "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
                   "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
                   "Language": "English, Spanish",
                   "Country": "USA, UK",
                   "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
                   "Metascore": "83",
                   "imdbRating": "7.9",
                   "imdbVotes": "876,575",
                   "imdbID": "tt0499549",
                   "Type": "movie",
                   "Response": "True"
                }
];

// Add your code below this line
var rating = watchList.map((item) => {return { title: item.Title, rating: item.imdbRating }
});
var filteredList = watchList.filter(item => item.imdbRating >= 8.0).map((item) =>{return {title: item.Title, rating: item.imdbRating}});

var averageRating = watchList.reduce((sum, item, index, array) => {
  if (item.Director === "Christopher Nolan"){
    sum[0] += Number(item.imdbRating);
    sum[1]++;
  }
  return index < array.length  - 1 ? sum : sum[0] / sum[1];
}, [0,0]);
// Add your code above this line

console.log(rating); 


// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  var newArray = [];
  // Add your code below this line
  for (let i = 0; i < s.length; i++){
    newArray.push(callback(s[i]));
  }
  // Add your code above this line
  return newArray;

};

var new_s = s.myMap(function(item){
  return item * 2;
});

// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  var newArray = [];
  // Add your code below this line
  for (let i = 0; i < s.length; i++){
    if (callback(s[i])){
      newArray.push(s[i]);
    }
  }
  // Add your code above this line
  return newArray;

};

var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});

function sliceArray(anim, beginSlice, endSlice) {
  // Add your code below this line
return anim.slice(beginSlice, endSlice);
  // Add your code above this line
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);

var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Add your code below this line
  return globalArray.concat([]).sort((a, b) => a - b);  
  // Add your code above this line
}

nonMutatingSort(globalArray);


function sentensify(str) {
  // Add your code below this line
 return str.split(/[^A-Za-z]/).join(" ");
  
  // Add your code above this line
}
sentensify("May-the-force-be-with-you");


// the global variable
var globalTitle = "Winter Is Coming";

// Add your code below this line
function urlSlug(title) {
    let slug = title.split(/\s+/).join("-").toLowerCase();
 return slug[0] === '-'? slug.slice(1) : slug;
  
}
// Add your code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"

function checkPositive(arr) {
  // Add your code below this line
  return arr.every(x => x >= 0);
  
  // Add your code above this line
}
checkPositive([1, 2, 3, -4, 5]);

function checkPositive(arr) {
  // Add your code below this line
  return arr.some(x => x >= 0);
  
  // Add your code above this line
}
checkPositive([1, 2, 3, -4, 5]);

function add(x) {
  // Add your code below this line
  return function(y) {
    return function(z){
      return x + y + z;
    }
  }
  
  // Add your code above this line
}
add(10)(20)(30);


function sumAll(arr) {
  let min = arr[0] < arr[1] ? arr[0] : arr[1];
  let max = arr[0] > arr[1] ? arr[0] : arr[1];
  return (max * (max + 1) - (min - 1) * min) / 2;
}

sumAll([10, 5]);


function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  newArr.push(...arr1.filter(x => !arr2.includes(x)));
  newArr.push(...arr2.filter(x => !arr1.includes(x)));
  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

function destroyer(arr) {
  let values = [...arguments];  
 return values.reduce((values, value) => values.filter(x => x!= value)); // Remove all te values
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  arr.push(...collection.filter(item =>{
    let matches = true;
    for (let property in source){      
      if (item.hasOwnProperty(property)){
        if (item[property] !== source[property]){
          matches = false;
        }             
      } else {
        matches = false;
      }
    }
    return matches;
  }));
  // Only change code above this line
  return arr;
} 

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });


function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  let spinalString = "";
  let regex = /[^A-Za-z]+/;
  let firstCharacter = str[0];
  if (!regex.test(firstCharacter)){
    spinalString += /[A-Z]/.test(firstCharacter) 
                  ? firstCharacter.toLowerCase()
                  : firstCharacter;
  } 
  for (let i = 1; i < str.length; i++){
    if (/[A-Z]/.test(str[i])) {
      spinalString += " ";
    }
    spinalString += str[i];
  } 
  spinalString = spinalString.split(regex).join("-").toLowerCase();  
  return spinalString;
}

console.log(spinalCase('This Is Spinal Tap'));

function translatePigLatin(str) {
  let vowelsRegex = /[aeiou]/;
  let suffix = "";
  let word = "";
  if (vowelsRegex.test(str[0])){
     suffix = "way"; 
     word += str; 
  } else {
    let i = 0;
    while ((i < str.length) && (!vowelsRegex.test(str[i]))){
      suffix += str[i];
      i++;
    }
    suffix += "ay";
    word = str.slice(i);
  }
  return word + suffix;
}

translatePigLatin("consonant");

function myReplace(str, before, after) {
  let start = str.indexOf(before);
  let end = start + before.length;
  if (/[A-Z]/.test(str[start])) {
    after = after[0].toUpperCase() + after.slice(1);
  }
  return str.slice(0, start) + after + str.slice(end);
  
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");


function pairElement(str) {
  let dna = [];
  for (let i = 0; i < str.length; i++){
    let pair = [str[i]];
    switch (str[i]){
      case 'A': pair.push('T'); break;
      case 'C': pair.push('G'); break;
      case 'G': pair.push('C'); break;
      case 'T': pair.push('A'); break;
    }
    dna.push(pair);
  }
  return dna;
}

pairElement("GCG");

function fearNotLetter(str) {
  let allPresent = str.charCodeAt(str.length - 1) - str.charCodeAt(0) === str.length -1;
  if (allPresent) {
    return undefined;
  } else {
    for (let i = 1; i < str.length; i++){
      if (str.charCodeAt(i) - str.charCodeAt(i - 1) !== 1){
        return String.fromCharCode(str.charCodeAt(i - 1) + 1);
      }
    }
    return "a";
  }
}

fearNotLetter("abce");

function uniteUnique(arr) {
  let arrays = [...arguments];
  for (let i = 1; i < arrays.length; i++){
    for (let j = 0; j < arrays[i].length; j++){
      if (!arr.includes(arrays[i][j])){
        arr.push(arrays[i][j]);
      }
    }
  }
  return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);


function convertHTML(str) {
  // &colon;&rpar;
  let converted = "";
  for (let i = 0; i < str.length; i++){
    switch(str[i]){
      case '&': converted +="&amp;"; break;
      case '<': converted +="&lt;"; break;
      case '>': converted +="&gt;"; break;
      case '"': converted +="&quot;"; break;
      case "'": converted +="&apos;"; break;
      default: converted += str[i];
    }
  }
  return converted;
}

convertHTML("Dolce & Gabbana");


function sumFibs(num) {
  if (num < 3) {
    return num < 2? 1 : 2;
  }
  let sum = 2;
  let fib1 = 1;
  let fib2 = 1;
  let fib = fib1 + fib2;
  while (fib <= num) {
    if (fib % 2 !== 0) {
      sum += fib;
    }
    fib1 = fib2;
    fib2 = fib;
    fib = fib1 + fib2;
  }
  return sum;
}

sumFibs(4);

function isPrime(num){
  for (let i = 2; i <= Math.sqrt(num); i++){
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function sumPrimes(num) {
  let sum = 0;
  for (let i = 2; i <= num; i++){
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}

sumPrimes(10);

function greatestCommons(arr) {
  let first = arr[0] < arr[1] ? arr[0] : arr[1];
  let second = arr[0] > arr[1] ? arr[0] : arr[1];
  /*12 8 */
  while (first !== 0) {
    let remainder = second % first;
    second = first;
    first = remainder;
  }
  console.log(second);
  return second;
}


greatestCommons([143,65]);


function smallestCommons(arr) {
  let first = arr[0] < arr[1] ? arr[0] : arr[1];
  let second = arr[0] > arr[1] ? arr[0] : arr[1];
  let multiple = 1;
  let numbers = [];
  for (let i = first; i <= second; i++){
    numbers.push(i);
  }
  let divisors = []; //array containing the powers of the prime divisors
  for (let i = 0; i <= second; i++){
    divisors.push(0);
  }
  for (let i = 0; i <= numbers.length; i++){ //for every number in the range
    for (let j = 2; j <= numbers[i]; j++){ //for every possible divisor
      let power = 0;
      while(numbers[i] % j === 0){ //if it divides the number, count the times
        power++;
        numbers[i] /= j;
      }
      if (power > divisors[j]){ //if the divisor has a greater exponent than 
        divisors[j] = power; //what was remembered before, retain current exponent
      }
    }
  }
  for (let i = 2; i < divisors.length; i++){
    while(divisors[i] > 0){
      multiple *= i;
      divisors[i]--;
    }
  }
  return multiple;
}


smallestCommons([23, 18]);

function dropElements(arr, func) {
  // Drop them elements.
  let position = 0;
  while (!func(arr[position])){
    position++;
  }
  return arr.slice(position);
}

dropElements([1, 2, 3], function(n) {return n < 3; });

function steamrollArray(arr) {
  // I'm a steamroller, baby
  let flat = [];
  for (let i = 0; i < arr.length; i++){
    if (Array.isArray(arr[i])){
      flat = flat.concat(steamrollArray(arr[i]));
    } else {
      flat.push(arr[i]);
    }
  }
  return flat;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));


function binaryAgent(str) {
  return str.split(" ").map(x => String.fromCharCode(parseInt(x, 2))).join("");
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");


function truthCheck(collection, pre) {
  // Is everyone being true?=
  for (let item of collection){
    if (!item.hasOwnProperty(pre)){
      return false;
    }
    if (!item[pre]) {
      return false;
    }
  }
  return true;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

function addTogether() {
  let args = [...arguments];
  if (args.length === 2){
    if (typeof args[0] !== "number" || typeof args[1] !== "number"){
      return undefined;
    } else {
      return args[0] + args[1];
    }
  }else {
     if (typeof args[0] !== "number") {
        return undefined;
      }
     return (x => (typeof x !== "number") || 
     (typeof args[0] !== "number") 
     ? undefined
      : x + args[0]);     
  }
   
}

addTogether(2,3);
