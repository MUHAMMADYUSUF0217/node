// 1 task 
const movieNames = ["Godfather", "Fast Furious", "Kurtlar Vadisi", "Break Prison"];

for (let i = 0; i < movieNames.length; i++) {
  console.log(movieNames[i]);
}

// 2 task 
const carManufacturers = ["Mercedes benz", "Ferrari", "Chevrolet", "BMW"];

// Convert array to a string
const carString = carManufacturers.join(', ');

console.log(carString);

const carString2 = "Mercedes benz, Ferrari, Chevrolet, BMW";

// Convert string back to an array
const carArray = carString2.split(', ');

console.log(carArray);

// 3 task 
const friends = ["Humoyun", "Muhammadabdullo", "Islombek", "O'tkir"];

// Add "hello" to each element of the array
const greetings = friends.map(friend => "hello " + friend);

console.log(greetings);

// 4 task 
const numericArray = [0, 1, 0, 1, 0, 0];

// Convert numeric array to Boolean array
const booleanArray = numericArray.map(num => num !== 0);

console.log(booleanArray);

// 5 task 
const array = [1, 6, 7, 8, 3, 4, 5, 6];

// Sort the array in descending order
const descendingArray = array.sort((a, b) => b - a);

console.log(descendingArray);

// 6 task 
const array2 = [1, 6, 7, 8, 3, 4, 5, 6];

// Filter the array by values greater than 3
const filteredArray = array2.filter(value => value > 3);

console.log(filteredArray);
//  7 task 

function findIndex(arr, number) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === number) {
        return i;
      }
    }
    return -1; // Return -1 if the number is not found in the array
  }
  
  // Example usage
  const array3 = [1, 2, 3, 4, 5];
  const number = 3;
  
  const index = findIndex(array3, number);
  console.log(index);
  
//   8 task 
let a = 0;

while (a < 10) {
  console.log(a);
  a++;
}

// 9 task 
function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  function printPrimeNumbers(limit) {
    for (let num = 2; num <= limit; num++) {
      if (isPrime(num)) {
        console.log(num);
      }
    }
  }
  
  // Example usage
  const limit = 20;
  printPrimeNumbers(limit);

//   10 task 
function printOddNumbers(limit2) {
    for (let num = 1; num <= limit; num += 2) {
      console.log(num);
    }
  }
  
  // Example usage
  const limit2 = 20;
  printOddNumbers(limit2);
  