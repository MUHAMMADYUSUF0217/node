// 2 Task 
function calculateTotalAcceptedFruits(pears, apples) {
    return pears + apples;
  }
  
  // Example usage
  let acceptedPears = 10;
  let acceptedApples = 5;
  let totalAcceptedFruits = calculateTotalAcceptedFruits(acceptedPears, acceptedApples);
  console.log("Total accepted fruits:", totalAcceptedFruits);
  
//   3 Task 

function greetUser(name) {
    let savedName = "MuhammadYusuf"; // Replace with the saved name in the payment terminal
  
    if (name === savedName) {
      return "Hello, " + name + "!";
    } else {
      return "No such name.";
    }
  }
  
  // Example usage
  let userName = "MuhammadYusuf"; // Replace with the user's name
  let greeting = greetUser(userName);
  console.log(greeting);
  
//   4 Task 

function calculateTypeAndOutput(arg) {
    let argType = typeof arg;
    let returnType = typeof argType;
  
    console.log("Argument type:", argType);
    console.log("Return type:", returnType);
  }
  
  // Example usage
  calculateTypeAndOutput(42);
  calculateTypeAndOutput("Hello, world!");
  calculateTypeAndOutput(true);
  calculateTypeAndOutput(null);
  calculateTypeAndOutput(undefined);
  
//   5 Task 

function isPrime(number) {
    // Check if the number is less than 2
    if (number < 2) {
      return false;
    }
  
    // Check for divisibility by numbers from 2 to the square root of the number
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  // Example usage
  console.log(isPrime(7));    // Output: true
  console.log(isPrime(12));   // Output: false
  console.log(isPrime(23));   // Output: true
  console.log(isPrime(1));    // Output: false
  