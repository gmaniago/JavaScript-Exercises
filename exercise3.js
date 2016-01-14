
// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.

function calculateAge(birthYear, currentYear) {
	var age = currentYear - birthYear;
	console.log('You are either' + age + 'or' (age - 1));
}

calculateAge(1987, 2015);
calculateAge(1991, 2015);
calculateAge(1976, 2015);