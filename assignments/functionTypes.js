// Write the below function in five different forms. i.e
// 1. Function Decleration
// 2. Function Expression
// 3. Arrow Function Without Curly Braces
// 4. Arrow Function With Curly Braces
// 5. Function Invocation

// Example Start
/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

//Function Decleration
function convertToString(n) {
  return String(n);
}

// Function Expression
let convertToString1 = function(n) {
  return String(n);
};

// Arrow Function
let convertToString = n => String(n);

// Arrow Function With Curly Bracket

let convertToString = n => {
  return String(n);
};

// Function Invocation

convertToString(21); // "21"

// Example End

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */

//Function Decleration
function addOne(n) {
	return n + 1;
}

// Function Expression
let addOne1 = function(n) {
	return n + 1;
};

// Arrow Function
let addOne2 = n => n + 1;

// Arrow Function With Curly Bracket
let addOne3 = n => {
	return n + 1;
};

// Function Invocation
addOne(21);

/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */

//Function Decleration
function subtractOne(n) {
	return n - 1;
}

// Function Expression
let subtractOne1 = function(n) {
	return n - 1;
};

// Arrow Function
let subtractOne2 = n => n - 1;

// Arrow Function With Curly Bracket
let subtractOne3 = n => {
	return n - 1;
};

// Function Invocation
subtractOne(21);

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */

//Function Decleration
function add(a, b) {
	return a + b;
}

// Function Expression
let add1 = function(a, b) {
	return a + b;
};

// Arrow Function
let add2 = (a, b) => a + b;

// Arrow Function With Curly Bracket
let add3 = (a, b) => {
	return a + b;
};

// Function Invocation
add(1, 2);

/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */

//Function Decleration
function subtract(a, b) {
	return a - b;
}

// Function Expression
let subtract1 = function(a, b) {
	return a - b;
};

// Arrow Function
let subtract2 = (a, b) => a - b;

// Arrow Function With Curly Bracket
let subtract3 = (a, b) => {
	return a - b;
};

// Function Invocation
subtract(9, 4);

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */

//Function Decleration
function multiply(a, b) {
	return a * b;
}

// Function Expression
let multiply1 = function(a, b) {
	return a * b;
};

// Arrow Function
let multiply2 = (a, b) => a * b;

// Arrow Function With Curly Bracket
let multiply3 = (a, b) => {
	return a * b;
};

// Function Invocation
multiply(9, 4);

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */

//Function Decleration
function divide(a, b) {
	return a / b;
}

// Function Expression
let divide1 = function(a, b) {
	return a / b;
};

// Arrow Function
let divide2 = (a, b) => a / b;

// Arrow Function With Curly Bracket
let divide3 = (a, b) => {
	return a / b;
};

// Function Invocation
divide(9, 4);

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */

//Function Decleration
function multiplyByItself(a) {
	return a * a;
}

// Function Expression
let multiplyByItself1 = function(a) {
	return a * a;
};

// Arrow Function
let multiplyByItself2 = a => a * a;

// Arrow Function With Curly Bracket
let multiplyByItself3 = a => {
	return a * a;
};

// Function Invocation
multiplyByItself(9);

/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */

//Function Decleration
function doMath(operation, x, y) {
	switch (operation) {
		case "add":
			console.log(`${x} + ${y} = ${x + y}`);
			break;
		case "subtract":
			console.log(`${x} - ${y} = ${x - y}`);
			break;
		case "multiply":
			console.log(`${x} * ${y} = ${x * y}`);
			break;
		case "divide":
			console.log(`${x} / ${y} = ${x / y}`);
			break;
		default:
			console.log("Invalid operation");
			break;
	}
}

// Function Expression
let doMath1 = function(operation, x, y) {
	switch (operation) {
		case "add":
			console.log(`${x} + ${y} = ${x + y}`);
			break;
		case "subtract":
			console.log(`${x} - ${y} = ${x - y}`);
			break;
		case "multiply":
			console.log(`${x} * ${y} = ${x * y}`);
			break;
		case "divide":
			console.log(`${x} / ${y} = ${x / y}`);
			break;
		default:
			console.log("Invalid operation");
			break;
	}
};

// Arrow Function
let doMath2 = (operation, x, y) => {
	switch (operation) {
		case "add":
			console.log(`${x} + ${y} = ${x + y}`);
			break;
		case "subtract":
			console.log(`${x} - ${y} = ${x - y}`);
			break;
		case "multiply":
			console.log(`${x} * ${y} = ${x * y}`);
			break;
		case "divide":
			console.log(`${x} / ${y} = ${x / y}`);
			break;
		default:
			console.log("Invalid operation");
			break;
	}
};

// Arrow Function With Curly Bracket
let doMath3 = (operation, x, y) => {
	switch (operation) {
		case "add":
			console.log(`${x} + ${y} = ${x + y}`);
			break;
		case "subtract":
			console.log(`${x} - ${y} = ${x - y}`);
			break;
		case "multiply":
			console.log(`${x} * ${y} = ${x * y}`);
			break;
		case "divide":
			console.log(`${x} / ${y} = ${x / y}`);
			break;
		default:
			console.log("Invalid operation");
			break;
	}
};

// Function Invocation
doMath("add", 3, 5);

/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */

//Function Decleration
function isGreaterThan(a, b) {
	return a > b;
}

// Function Expression
let isGreaterThan1 = function(a, b) {
	return a > b;
};

// Arrow Function
let isGreaterThan2 = (a, b) => a > b;

// Arrow Function With Curly Bracket
let isGreaterThan3 = (a, b) => {
	return a > b;
};

// Function Invocation
isGreaterThan(9, 4);

/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */

//Function Decleration
function isLesserThan(a, b) {
	return a < b;
}

// Function Expression
let isLesserThan1 = function(a, b) {
	return a < b;
};

// Arrow Function
let isLesserThan2 = (a, b) => a < b;

// Arrow Function With Curly Bracket
let isLesserThan3 = (a, b) => {
	return a < b;
};

// Function Invocation
isLesserThan(9, 4);

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */

//Function Decleration
function isEqualTo(a, b) {
	return a == b;
}

// Function Expression
let isEqualTo1 = function(a, b) {
	return a == b;
};

// Arrow Function
let isEqualTo2 = (a, b) => a == b;

// Arrow Function With Curly Bracket
let isEqualTo3 = (a, b) => {
	return a == b;
};

// Function Invocation
isEqualTo(9, 4);

/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */

//Function Decleration
function min(a, b) {
	return Math.min(a, b);
}

// Function Expression
let min1 = function(a, b) {
	return Math.min(a, b);
};

// Arrow Function
let min2 = (a, b) => Math.min(a, b);

// Arrow Function With Curly Bracket
let min3 = (a, b) => {
	return Math.min(a, b);
};

// Function Invocation
min(9, 4);

/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */

//Function Decleration
function max(a, b) {
	return Math.max(a, b);
}

// Function Expression
let max1 = function(a, b) {
	return Math.max(a, b);
};

// Arrow Function
let max2 = (a, b) => Math.max(a, b);

// Arrow Function With Curly Bracket
let max3 = (a, b) => {
	return Math.max(a, b);
};

// Function Invocation
max(9, 4);

/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */

//Function Decleration
function isEven(a) {
	return a % 2 == 0;
}

// Function Expression
let isEven1 = function(a) {
	return a % 2 == 0;
};

// Arrow Function
let isEven2 = a => a % 2 == 0;

// Arrow Function With Curly Bracket
let isEven3 = a => {
	return a % 2 == 0;
};

// Function Invocation
isEven(9);

/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */

 //Function Decleration
function isOdd(a) {
	return !isEven(a);
}

// Function Expression
let isOdd1 = function(a) {
	return !isEven(a);
};

// Arrow Function
let isOdd2 = a => !isEven(a);

// Arrow Function With Curly Bracket
let isOdd3 = a => {
	return !isEven(a);
};

// Function Invocation
isOdd(9);

/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */

//Function Decleration
function getGrade(score, total) {
  let percent = score / total;
  if (percent >= 90) {
		return "A";
  } else if (percent >= 80) {
		return "B";
  } else if (percent >= 70) {
		return "C";
  } else if (percent >= 60) {
		return "D";
  } else {
		return "F";
  }
}

// Function Expression
let getGrade1 = function(score, total) {
	let percent = score / total;
	if (percent >= 90) {
		return "A";
	} else if (percent >= 80) {
		return "B";
	} else if (percent >= 70) {
		return "C";
	} else if (percent >= 60) {
		return "D";
	} else {
		return "F";
	}
};

// Arrow Function
let getGrade2 = (score, total) => {
	let percent = score / total;
	if (percent >= 90) {
		return "A";
	} else if (percent >= 80) {
		return "B";
	} else if (percent >= 70) {
		return "C";
	} else if (percent >= 60) {
		return "D";
	} else {
		return "F";
	}
};

// Arrow Function With Curly Bracket
let getGrade3 = getGrade1 => {
	let percent = score / total;
	if (percent >= 90) {
		return "A";
	} else if (percent >= 80) {
		return "B";
	} else if (percent >= 70) {
		return "C";
	} else if (percent >= 60) {
		return "D";
	} else {
		return "F";
	}
};

// Function Invocation
getGrade(3, 5);

/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */

 //Function Decleration
function joinWithSpace(a, b) {
  return a + " " + b;
}

// Function Expression
let joinWithSpace1 = function(a, b) {
	return a + " " + b;
};

// Arrow Function
let joinWithSpace2 = (a, b) => a + " " + b;

// Arrow Function With Curly Bracket
let joinWithSpace3 = (a, b) => {
	return a + " " + b;
};

// Function Invocation
joinWithSpace(9, 4);
