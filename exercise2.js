// Define a function maxOfThree() that takes three numbers as arguments 
// and returns the largest of them.

function maxOfThree(a, b, c)
	if (a > b) {
	    return a;
	} else {
	    return c;
	} else if (b > c) {
	    return b;
	} else {
	    return c;
	}


// this function is very similar to the one above, except that it takes 
// another parameter. 

// Another way to get the max of three numbers is to use Math.max

function getMax(num1, num2, num3) {
    var max = Math.max(num1, num2, num3);
    return max;
}

alert(getMax(20, 3, 5)); // 20