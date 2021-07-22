// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
// Creates a function 'buildABear' with parameters name, age, fur, clothes, specialPower
function buildABear(name, age, fur, clothes, specialPower) {
  // Creates a variable 'greeting' that takes a string which interpolates the 'name' parameter
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  //Creates a variable "demographics" that takes an array containing the 'name' and 'age' parameters
  var demographics = [name, age];
  // Creates a variable 'powerSaying' that takes a string which concatenates the 'specialPower' parameter
  var powerSaying = "Did you know that I can " + specialPower + " ?";
  // Creates a variable 'builtBear' that takes an object
  var builtBear = {
    // Adds key 'basicInfo' with the value of the 'demographics' variable
    basicInfo: demographics,
    // Adds key 'clothes' with the value of the 'clothes' parameter
    clothes: clothes,
    // Adds key 'exterior' with the falue of the 'fur' parameter
    exterior: fur,
    // Adds key 'cost' with a value of 49.99
    cost: 49.99,
    // Adds key 'sayings' with an array value containing the 'greeting' and 'powerSaying' variables as well as a string
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    // Addds a key 'isCuddly' with a boolean value of true
    isCuddly: true,
  };
// Stops the execution of the 'buildABear' function and returns the 'builtBear' value. If this is intended to print 'builtBear' to the console, it should include console.log(builtBear);
  return builtBear
}

// Calls the function 'buildABear' with the arguments 'Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares'
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
// Calls the function 'buildABear' with the arguments 'Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in'
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');

//FizzBuzz
// Creates a function 'fuzzBuzz' with three parameters
function fizzBuzz(num1, num2, range) {
  // Creates a for loop that will run 'range' number of times
  for (var i = 0; i <= range; i++) {
    // Creates a conditional that will print 'fizzbuzz' if both the num1 and num2 arguments are divisible by the current iteration number
    if (i % num1 === 0 && i % num2 === 0) {
      console.log('fizzbuzz');
      // Adds a conditional to run if the previous condition is not met. If the value of num1 is divisible by the current iteration number, print 'fizz'
    } else if (i % num1 === 0) {
      console.log('fizz');
      // Adds a conditional to run if the previous 2 conditions are not met. if the value of num 2 is divisble by the current iteration number, print 'buzz'
    } else if (i % num2 === 0) {
      console.log('buzz');
      // If none of the above conditions are met, prints the value of the current iteration
    } else {
      console.log(i);
    }
  }
}

// Calls the function with the arguments 3, 5, 100. This will print 100 rows, printing fizzbuzz on rows divisible by both 3 and 5 (e.g. 15), printing fizz for rows divisible by only 3, and printing buzz for rows divisible by only 5. Rows not divisible by either will print the row number.
fizzBuzz(3, 5, 100);
// It looks like this is supposed to call the fizzBuzz function, but there is a typo - lowercase "b"
fizzbuzz(5, 8, 400);
