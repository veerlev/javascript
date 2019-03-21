alert("This is a js calculator. You get to pick two numbers and an operation and obtain the result.");
var operation = parseInt(prompt("Type 1 for addition, 2 for substraction, 3 for multiplication, 4 for division, 5 for modulo:"));
var first = parseInt(prompt("Enter the first number: "));
var second = parseInt(prompt("Enter the second number: "));
var result = first + " ";
var resultStr = second + " = ";
if (operation === 1 ) {
	result += "+ " + resultStr + (first + second) + ".";
}
else if (operation === 2) {
	result += "- " + resultStr + (first - second) + ".";
}
else if (operation === 3) {
	result += "x " + resultStr + (first * second) + ".";
}
else if (operation === 4) {
	result += "/ " + resultStr + (first / second) + ".";
}
else if (operation === 5) {
	result += "modulo " + resultStr + (first % second) + ".";
}
else {
	result = "Operation unknown.";
}
alert(result);