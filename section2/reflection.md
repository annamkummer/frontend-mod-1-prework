## Section 2 Reflection

1. Regarding the blog posts in Part A, how do you feel about asking questions? Do you tend to ask them too soon, or wait too long, or somewhere in between?
    If there is something I feel I should know or be able to figure out, I definitely tend to spend too long trying to do it myself rather than ask for help. So, I really took note of the point that spending more than 20-30 minutes once you're not making progress any more is just a waste of time. I also know that I can feel anxious about speaking up when I'm not completely sure of myself, I fear looking stupid. So, I try to combat that by speaking up often and making mistakes early to relieve some of the pressure to appear perfect.
1. In this section, we removed some of the supports that you had in Section 1. We didn't give the directions for how to run a file in node, and really sent you off to learn about functions by exploring several outside resources. How did that feel? What was uncomfortable about it? How did it support your learning?
    To be honest, it didn't feel very uncomfortable, rather the opposite. I started to feel like I could be trusted to do some learning and execution on my own. It made me feel more confident, especially working in the terminal, which is starting to feel familiar now.
1. What is a conditional statement? Give one example of a daily life conditional. Give one example of where a conditional is probably used in a web application you use.
    A conditional is an if/then statement. It defines the circumstances in which something should be done. An example in daily life is the fuel light in the car. When it comes on, you go get gas, and you (usually) don't get gas until it does. In online scrabble, it won't let you play a word unless it matches an entry in their dictionary. There's probably a conditional in the code that checks the word you're trying to play against their dictionary and, if it matches an entry it locks in the play, if it doesn't match an entry it shows you an invalid word message.
1. How do you add multiple conditions to an `if` statement? In your own words, explain how to program reads them and determines what to do.
    You add multiple conditions using `else if`. For example:
    ```
var dogAge = "5";

if (dogAge >= 0 && dogAge <= 2) {
  console.log ("puppy");
} else if (dogAge >= 0 && dogAge <10) {
  console.log ("adult");
} else if (dogAge >= 10) {
  console.log("elderly");
} else{
  console.log("Please enter a number greater than 0.");
}
  ```
    In this case, the program will first look at the `if` condition (is the variable dogAge between 0 and 2, inclusive?). If
    the answer is yes, the condition will evaluate to true and the statement in the first {} will run (log 'puppy'). Then it's done with this code and will not look at the following `else if`s or `else`. If the variable dogAge is not between 0 and 2, the computer will skip running 'puppy' and instead look at the first `else if` condition (is dogAge positive but less than 10?). If that evaluates to true, the program will log "adult", if it's false, the program will move on to the next `else if` condition. This will go on until there is a condition that evaluates to true or the program hits an `else`. `else` is like
    English 'otherwise', which captures any scenario not contained in the previous conditions.
1. What tools are available to you, as a developer, if you want to check that TWO conditions are met? Or, if you want to check that 1 of 2 conditions are met, before running a block of code?
    The logical operator `&&`, which corresponds to English "both/and" will check two conditions and only evaluate to true if both do. The logical operator `||`, corresponding to English "either/or" will check two conditions and evaluate to true as long as at least one does.
1. What questions do you still have about `if` statements and/or functions?
  * In a scenario where none of the conditions are met, does your code have to tell the computer to move on with an `else`? Or will it just skip to the next thing?
