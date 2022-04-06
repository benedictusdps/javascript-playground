// Randomize the race number of each runner
let raceNumber = Math.floor(Math.random() * 1000);

// Variables
const registeredEarly = true;
const age = 16;

// Race number for adults and register early
if (age > 18 && registeredEarly) {
  raceNumber += 1000;
}

// Control flow for the whole race registration
if (age > 18 && registeredEarly) {
  console.log(`Runner number ${raceNumber} will race at 9:30 am.`);
} else if (age > 18 && !registeredEarly) {
  console.log(`Runner number ${raceNumber} will race at 11:00 am.`);
} else if (age < 18) {
  console.log(`Runner number ${raceNumber} will race at 12.30 pm.`);
} else {
  // For those with age exactly 18
  console.log("Runner please come see the registration desk.");
}
