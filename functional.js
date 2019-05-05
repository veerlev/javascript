
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
}function destroyer(arr) {
  let values = [...arguments];  
 return values.reduce((values, value) => values.filter(x => x!= value)); // Remove all te values
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

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

