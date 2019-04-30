let hello = "   Hello, World!  ";
let wsRegex = /(^\s*)(\S.*\S)(\s*$)/; // Change this line
let result = hello.replace(wsRegex, '$2'); // Change this line
console.log(result);
