
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
