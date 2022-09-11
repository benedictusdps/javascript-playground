let secretMessage = [
  "Learning",
  "is",
  "not",
  "about",
  "what",
  "you",
  "get",
  "easily",
  "the",
  "first",
  "time,",
  "it",
  "is",
  "about",
  "what",
  "you",
  "can",
  "figure",
  "out.",
  "-2015,",
  "Chris",
  "Pine,",
  "Learn",
  "JavaScript",
];

// Check length of array
console.log(secretMessage.length);

// Remove last word and check length
secretMessage.pop();
console.log(secretMessage.length);

// Add two new words
secretMessage.push("to", "Program");

// Replace word
secretMessage[7] = "right";

// Remove first word
secretMessage.shift();

// Add new word in the first list
secretMessage.unshift("Programming");

// Remove strings and replace
secretMessage.splice(6, 5, "know");

// Print the words
console.log(secretMessage.join(" "));
