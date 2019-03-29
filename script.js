// Make an keyless car EVEN BETTER!
// We are improving our car from previous exercise now. 


var age = prompt("What is your age?");

if (Number(age) < 18) {
	alert("Sorry, you are too yound to drive this car. Powering off");
} else if (Number(age) > 18) {
	alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
}

//1. Make the above code have a function called checkDriverAge(). Whenever you call this function, you will get prompted for age. Use Function Declaration to create this function.
function checkDriverAge() {
	var age = prompt("What is your age?");
	if (Number(age) < 18) {
		alert("Sorry, you are too yound to drive this car. Powering off");
	} else if (Number(age) > 18) {
		alert("Powering On. Enjoy the ride!");
	} else if (Number(age) === 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	}
}
// Notice the benefit in having checkDriverAge() instead of copying and pasting the function everytime?


//2. Create another function that does the same thing, assign it to checkDriverAge2 variable using Function Expression.
var checkDriverAge2 = function() {
	var age = prompt("What is your age?");
	if (Number(age) < 18) {
		alert("Sorry, you are too yound to drive this car. Powering off");
	} else if (Number(age) > 18) {
		alert("Powering On. Enjoy the ride!");
	} else if (Number(age) === 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	}
}

//BONUS: Instead of using the prompt. Now, only use console.log and make the checkDriverAge() function accept an argument of age, so that if you enter:
// checkDriverAge(92);
// it returns "Powering On. Enjoy the ride!" 
function checkDriverAge(age) {
	if (Number(age) < 18) {
		return "Sorry, you are too yound to drive this car. Powering off";
	} else if (Number(age) > 18) {
		return "Powering On. Enjoy the ride!";
	} else if (Number(age) === 18) {
		return "Congratulations on your first year of driving. Enjoy the ride!";
	}
}

var anArray = ["first", "second", ["third", 4], "fifth"];

var pulsatilla = {
	colors : ["purple", "white", "red"],
	propagation : "seed",
	hardiness : true,
	minimumTemperature : -40,
	sprout : function() {
		console.log("You have a new pulsatilla \u{1F331}!");
	}
}

var helleborus = {
	colors : ["burgundy", "white", "pink", "green", "mixed"],
	propagation : "division",
	hardiness : true,
	minimumTemperature : -30,
	sprout : function() {
		console.log("You have a new helleborus \u{1F331}!");
	}
}

var dionaea = {
	colors : ["red", "green", "red"],
	propagation : ["seed", "division", "leaf propagation"],
	hardiness : false,
	minimumTemperature : 5,
	sprout : function() {
		console.log("You have a new dionaea \u{1F331}!");
	}
}

var plants = [pulsatilla, helleborus, dionaea];
console.log(plants);