1. 🎖Write a function named calculateDogAge that:
  * [ ] Takes 1 argument: your puppy's age.
  * [ ] Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
  * [ ] Outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
  * [ ] Add an additional argument to the function that takes the conversion rate of human to dog years.

```js
function calculateDogAge(age) {
	console.log(`Your doggie is ${age * 7} years old in dog years!`);
}
```

2. 🎖Write a function named calculateSupply that:
  * [ ] takes 2 arguments: age, amount per day.
  * [ ] calculates the amount consumed for rest of the life (based on a constant max age).
  * [ ] outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
  * [ ] Accept floating point values for amount per day, and round the result to a round number.

```js
function calculateSupply(age, amount) {
	const MAX_AGE = 80;
	let remainingAge = MAX_AGE - age;
	let requiredAmount = Math.round(remainingAge * amount);
	console.log(`You will need ${requiredAmount} to last you until the ripe old age of ${MAX_AGE}`);
}
```
3. 🎖Create a function called celsiusToFahrenheit:
  * [ ] Store a celsius temperature into a variable.
  * [ ] Convert it to fahrenheit and output "NN°C is NN°F".
  * [ ] Create a function called fahrenheitToCelsius:
  * [ ] Now store a fahrenheit temperature into a variable.
  * [ ] Convert it to celsius and output "NN°F is NN°C."

```js
function celsiusToFahrenheit(celsius) {
	let fahrenheit = (celsius * 9) / 5 + 32;
	console.log(`${celsius}°C is ${fahrenheit}°F`);
}

function fahrenheitToCelsius(fahrenheit) {
	let celsius = ((fahrenheit - 32) * 5) / 9;
	console.log(`${fahrenheit}°F is ${celsius}°C`);
}
```

4. 🎖The function below returns true if the parameter age is greater than 18. Otherwise it asks for a confirmation and returns its result:

```js
function checkAge(age) {
	if (age > 18) {
		return true;
	} else {
		// ...
		return confirm("Did parents allow you?");
	}
}
```
  4.1 🎖Convert the above function using ternary operator.
  ```js
  function checkAge(age) {
   	return age > 18 ? true : confirm("Did parents allow you?");
  }
  ```

  4.2 🎖Convert the above function using `||` operator.
  ```js
  function checkAge(age) {
   	return age > 18 || confirm("Did parents allow you?");
  }
  ```
Will the function work differently if else is removed like below?

```js
function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm("Did parents allow you?");
}
```
Is there any difference in the behavior of these two variants? If there is what is that?

No

5. 🎖 Write a function pow(x,n) that returns x in power n.

  * [ ] Use prompt to take values for x and n, and then shows the result of pow(x,n) using alert.
  * [ ] In this task the function should support only natural values of n: integers greater then 1.

```js
function pow(x, n) {
	if (x < 1 || n < 1) {
		console.log("The number below 1 is not allowed");
		return;
	}
	console.log(x ** n);
}

pow(3, 2); // 9
pow(3, 3); // 27
pow(1, 100); // 1
pow(-31, 2); // "The number below 1 is not allowed"
```

6. 🎖Write a program that asks the user for a number n and gives them the possibility to choose between computing the sum and computing the product of 1,…,n. Return the result accordingly.

```js
function product(number) {
	if (number == 0) {
		return 1;
	}
	return number * product(number - 1);
}

function sum(number) {
	if (number == 0) {
		return 0;
	}
	return number + sum(number - 1);
}

let numString = prompt("Enter number");
let choiceString = prompt("Enter 1 for sum, 2 for product");

let num = parseInt(numString);
let choice = parseInt(choiceString);

switch (choice) {
	case 1:
		alert(sum(num));
		break;
	case 2:
		alert(product(num));
		break;
	default:
		alert("Invalid choice");
		break;
}

```
6. 🎖Write a program that asks the user for a number n using prompt and prints the sum of the numbers 1 to n

```js
function sum(number) {
	if (number == 0) {
		return 0;
	}
	return number + sum(number - 1);
}

let numString = prompt("Enter number");
let num = parseInt(numString);

alert(sum(num));
```
7. 🎖Modify the previous program such that only multiples of 5 or 7 are considered in the sum, e.g. n = 20 (5,7,10,14,15,20) 71

```js
function sum(number) {
	if (number == 0) {
		return 0;
  }
  // If number cannot be divided by neither 5 nor 7
  if (number % 5 && number % 7) {
    return sum(number - 1);
  } 
	return number + sum(number - 1);
}

let numString = prompt("Enter number");
let num = parseInt(numString);

alert(sum(num));
```

8. 🎖Write a function `min` that takes two arguments and returns their minimum.

```js
function min(a, b) {
  return Math.min(a, b);
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
``````
