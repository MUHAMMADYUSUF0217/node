// 1. Perform addition of various types (string + boolean, string + number, number + boolean)

console.log('hello ' + true);
// Expected output: "hello true"

console.log(2001 + ': A Space Odyssey');
// Expected output: "2001: A Space Odyssey"

console.log(2 + true);
// Expected output: 3

// 2. Perform multiplication of various types (string * boolean, string * number, number * boolean)

// JavaScript does not support multiplication of a string with a boolean or a number with a boolean.
//  However, it is possible to concatenate a string with a boolean or a number with a string using the "+" operator.

let string = "Hello";
let boolean = true;
let number = 5;

console.log(string * boolean); // NaN
console.log(string * number); // NaN
console.log(number * boolean); // 1

console.log(string + boolean); // "Hellotrue"
console.log(string + number); // "Hello5"
console.log(number + string); // "5Hello"

// 3.Divide different types (string / boolean, string / number, number / Boolean)

//  String / Boolean:
// - A string is a sequence of characters enclosed in quotes.
// - A boolean is a primitive data type with two values: true or false.

// Examples:
- "Hello" / true
- "false" / false
- "123" / true

//  String / Number:
// - A string is a sequence of characters enclosed in quotes.
// - A number is a primitive data type that represents numeric values.

// Examples:
- "10" / 5
- "3.14" / 7
- "-42" / 0

//  Number / Boolean:
// - A number is a primitive data type that represents numeric values.
// - A boolean is a primitive data type with two values: true or false.

// Examples:
- 100 / true
- 0 / false
- -5.5 / true

// 4.Perform explicit conversion (number, string, boolean)

// To perform explicit conversion in JavaScript, you can use the following methods:

// 1. Number(): Converts any value to a number.
// Example: 

let num = Number("10"); // num will be 10 (number)


//  parseInt(): Converts a string to an integer.
// Example: 

let num2 = parseInt("10"); // num will be 10 (number)


// parseFloat(): Converts a string to a floating-point number.
// Example: 

let num3 = parseFloat("10.5"); // num will be 10.5 (number)


// String(): Converts any value to a string.
// Example: 

let str = String(10); // str will be "10" (string)


//  Boolean(): Converts any value to a boolean.
// Example: 

let bool = Boolean(0); // bool will be false (boolean)