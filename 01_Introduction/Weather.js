// The weather forecast in Kelvin for today
const kelvin = 256;
// Convert Kelvin to Celcius
const celcius = kelvin - 273;
// Convert Celcius to Fahrenheit
let fahrenheit = celcius * (9 / 5) + 32;
// Convert Celcius to Newton
let newton = celcius * (33 / 100);

// Round down the Fahrenheit and Newton temperature
fahrenheit = Math.floor(fahrenheit);
newton = Math.floor(newton);

// Log the temperatures to the console
console.log(`The temperature is ${kelvin} degrees Kelvin.`);
console.log(`The temperature is ${celcius} degrees Celcius.`);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${newton} degrees Newton.`);
