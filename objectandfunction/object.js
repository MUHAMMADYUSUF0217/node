// 1 Task 
// Create car object
let car = {};

// Add color property
car.color = 'black';

// Change color property
car.color = 'green';

// Add power property as a function
car.power = function() {
  console.log("Engine power: 200hp");
};

// Display car color
console.log("Car color:", car.color);

// Display engine power
car.power();
