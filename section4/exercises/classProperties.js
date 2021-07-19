/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any proerties at this time!!

// Prompt 1: Dog
class Dog {

}

var beagle = new Dog();
console.log(beagle);

var yorkie = new Dog();
console.log(yorkie);

// Prompt 2: Snack
class Snack {

}

var popcorn = new Snack();
console.log(popcorn);

var cookie = new Snack();
console.log(cookie);


// Prompt 3: Shirt
class Shirt {

}

var polo = new Shirt();
console.log(polo);

var tShirt = new Shirt();
console.log(tShirt);

//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dog
 class DogType {
  constructor () {
    this.name = "Bingo";
    this.age = 3;
    this.hasShots = true;
  }
}

var beagle = new DogType();
console.log(beagle);

// Prompt 2: Snack
class SnackItem {
  constructor () {
    this.time = "2pm";
    this.weightInGrams = 200;
    this.saltySweet = "salty";
  }
}

var popcorn = new SnackItem();
console.log(popcorn);

// Prompt 3: Shirt
class TShirt {
  constructor () {
    this.color = "blue";
    this.text = "Colorado";
    this.size = "S"
  }
}

var tee1 = new TShirt();
console.log(tee1);

//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog
class ShelterDog {
  constructor (name, age, hasShots) {
    this.name = name;
    this.age = age;
    this.shots = hasShots;
  }
}

var beagle = new ShelterDog("Bingo", 3, true);
var yorkie = new ShelterDog("Princess", 7, true);

console.log(beagle, yorkie);

// Prompt 2: Snack
class SnackType {
  constructor(time, weightInGrams, saltySweet) {
    this.time = time;
    this.weight = weightInGrams;
    this.flavor = saltySweet;
  }
}

var popcorn = new SnackType("2pm", 200, "salty");
var cookie = new SnackType("4pm", 60, "sweet");

console.log(popcorn, cookie);


// Prompt 3: Shirt
class MyShirt {
  constructor(size, color, fits) {
    this.size = size;
    this.color = color;
    this.fits = fits;
  }
}

var teeOne = new MyShirt("S", "blue", true);
var teeTwo = new MyShirt("M", "green", false);

console.log(teeOne, teeTwo);
