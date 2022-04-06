// Enter your name here
const userName = "Beno";
// Check whether the user enters their name or not
if (userName.length > 0) {
  console.log(`Hello, ${userName}!`);
} else {
  console.log(`Hello!`);
}

// Enter your question here
const userQuestion = "Am I going to succeed in life?";
// Log the question
if (userName.length > 0) {
  console.log(`${userName} asks "${userQuestion}"`);
} else {
  console.log(`The question is "${userQuestion}"`);
}

// Randomizer for the question
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = "";

// Control flow for the Magic Eight Ball reply
if (randomNumber == 0) {
  eightBall = "It is certain";
} else if (randomNumber == 1) {
  eightBall = "It is decidedly so";
} else if (randomNumber == 2) {
  eightBall = "Reply hazy try again";
} else if (randomNumber == 3) {
  eightBall = "Cannot predict now";
} else if (randomNumber == 4) {
  eightBall = "Do not count on it";
} else if (randomNumber == 5) {
  eightBall = "My sources say no";
} else if (randomNumber == 6) {
  eightBall = "Outlook not so good";
} else if (randomNumber == 7) {
  eightBall = "Signs point to yes";
}

// Log the answer
console.log(`Magic Eight Ball answers "${eightBall}".`);
