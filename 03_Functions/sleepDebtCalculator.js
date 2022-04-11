// Funtion that returns any given night's number of hours of rest
const getSleepHours = (day) => {
  if (day === "monday") {
    return 8;
  } else if (day === "tuesday") {
    return 9;
  } else if (day === "wednesday") {
    return 7;
  } else if (day === "thursday") {
    return 4;
  } else if (day === "friday") {
    return 6;
  } else if (day === "saturday") {
    return 10;
  } else if (day === "sunday") {
    return 11;
  }
};

// Total sleep hours
const getActualSleepHours = () =>
  getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday") +
  getSleepHours("saturday") +
  getSleepHours("sunday");

// Ideal sleep hours
const getIdealSleepHours = () => {
  idealHours = 8;
  return idealHours * 7;
};

// Sleep debt calculation
const calculateSleepDebt = () => {
  actualSleepHours = getActualSleepHours();
  idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log("User got the perfect amount of sleep.");
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      "User got more sleep than needed. User has slept " +
        (actualSleepHours - idealSleepHours) +
        " more hours than needed."
    );
  } else if (actualSleepHours < idealSleepHours) {
    console.log(
      "User should get some rest. User only got " +
        (idealSleepHours - actualSleepHours) +
        " hours of sleep."
    );
  }
};

calculateSleepDebt();
