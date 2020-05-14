// ⭐️ Example Challenge start ⭐️

/**
 * ### Challenge `addNumbers`
 * 
 * @instructions
 * This function should be able to take two numbers as arguments
 * and return the result of adding them together.
 * 
 * For example, if we invoke `addNumbers` passing 5 and 3,
 * the returned value should be 8.
 *
 * NOTE: This example has been completed for you.
*/
function addNumbers(num1, num2) {
  return num1 + num2;
}

// ⭐️ Example Challenge end ⭐️


// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇


/**
 * ### Challenge `sayGoodbye`
 * 
 * @instructions
 * This function should take in a name as an argument
 * and return a string that says 'Goodbye, {name}. Have a great day.'
 * 
 * For example, if we invoke `sayGoodbye`
 * passing 'Andy' as the argument,
 * the returned value should look like: 'Goodbye, Andy. Have a great day.'
 * 
*/
function sayGoodbye(enteredName) {
  return "Goodbye, " + enteredName + ". Have a great day.";
}
console.log("Displaying sayGoodbye() function passing in 'Moonmen' for the name");
console.log(sayGoodbye('Moonmen'));
console.log("That was a 'Rick & Morty' reference for anyone wondering.");

/**
 * ### Challenge `temperatureCtoF`
 * 
 * @instructions
 * This function should take an a temperature in celsius as an argument,
 * and return the temperature in fahrenheit, rounded to the nearest whole number. 
 * 
 * For example, if we invoke `temperatureCtoF`
 * passing 24 as the argument,
 * the returned value should be: 75
 * 
 * Hint 1: The formula for converting celsius to fahrenheit is t*9/5 + 32 where t is the temperature in celsius.
 * Hint 2: There is a very easy way to round numbers in JS. Do a google search to find out how. 
*/
function temperatureCtoF(celsius) {
  let fahrneheit = Math.round(celsius * 1.8 + 32);

  return fahrneheit;
}
console.log("Testing temperatureCtoF() function passing in '32' below:");
console.log(temperatureCtoF(32));

/**
 * ### Challenge `temperatureInF`
 * 
 * @instructions
 * This function should take an a temperature and a unit (either 'F' or 'C') as arguments,
 * and return the temperature in fahrenheit, rounded to the nearest whole number. 
 * 
 * For example, if we invoke `temperatureInF`
 * passing 88, 'F' as the arguments,
 * the returned value should be: '88F'
 * 
 * If we invoke `temperatureInF`
 * passing 24, 'C' as the arguments,
 * the returned value should be: '75F'
 * 
 * Hint: You can call your `temperatureCtoF` function from inside `temperatureInF`.
*/
function temperatureInF(degree, cOrF) {
  if((cOrF === 'C') || (cOrF === 'c')) {
    let fahrenheit = Math.round(degree * 1.8 + 32);
    return fahrenheit + "F";
  } else if((cOrF === 'F') || (cOrF === 'f')) {
    let fahrenheit = Math.round(degree);
    return fahrenheit + "F";
  } else {
    return "Unrecognized temperature. Please enter units in (C)elsius or (F)ahrenheit only.";
  }
}
console.log("Testing temperatureInF() function passing in '23, C' below");
console.log(temperatureInF(23, 'C'));
console.log("Testing temperatureInF() function passing in '57, f' below");
console.log(temperatureInF(57, 'f'));
console.log("Testing temperatureInF() function passing in '18, G' below");
console.log(temperatureInF(18, 'G'));


/**
 * ### Challenge `makePersonObject`
 * 
 * @instructions
 * This function should take an id, a name, and an email as arguments
 * and return an object with `id`, `name`, and `email` properties.
 * 
 * For example, if we invoke `makePersonObject`
 * passing 5, 'Leia' and 'leia@leia.com' as arguments,
 * the returned value should look like:
 * {
 *   id: 5,
 *   name: "Leia",
 *   email: "leia@leia.com",
 * }
*/
function makePersonObject(id, name, email) {
  let position = 0;
  let foundChar = false;
  while((position < email.length) && (!foundChar)) {
    if(email.charAt(position) === '@') {
      foundChar = true;
    }
    position++;
  }

  if(foundChar) {
    return {id, name, email};
  } else {
    return {id, name, 'email':"Invalid Email"};
  }
}
console.log("Testing makePersonObject() function passing in '51780, Peter Wood, peters_email@peters_domain.com' below");
console.log(makePersonObject(51780, 'Peter Wood', 'peters_email@peters_domain.com'));
console.log("Testing makePersonObject() function passing in '3549, Guy Fieri, tripleD&food_network.net' below");
console.log(makePersonObject(3549, 'Guy Fieri', 'tripleD&food_network.net'));
console.log("For extra credit, see what you get when you convert Guy's ID number above from Decimal to Hex.");

/**
 * ### Challenge `getName`
 * 
 * @instructions
 * This function takes as its only argument
 * an object containing a `name` property,
 * and return a string that reads `Hello, my name is {name}`,
 * where `{name}` is the name stored in the object.
 * 
 * For example, if we invoke `getName`
 * passing { id: 1, name: 'Leia', email: 'leia@leia.com` } as the argument,
 * the returned value should look like `Hello, my name is Leia`.
*/
function getName(enteredUser) {
  let displayString = "Hello, my name is " + enteredUser.name;
  return displayString;
}

const user = {
  id: 1313,
  name: 'Dave',
  email: 'dave@fx_network.com'
};
console.log("Testing getName() function passing in 'Dave' via 'user' object below");
console.log(getName(user));


/**
 * ### Challenge `appleIndex`
 * 
 * @instructions
 * This function takes as its only argument an array 
 * containing strings,
 * and returns the index in the array of the string 'apple'.
 * 
 * You may assume the string 'apple' will appear exactly 
 * once in the array.
 * 
 * For example, if we invoke `appleIndex`
 * passing in [ 'orange', 'grape', 'apple', 'banana', 'mango' ] as the argument,
 * the returned value should be: 2.
*/
function appleIndex(edibles) {
  let i = 0; // Initialized to the start of any array
  let foundPosition = false;
  while((i < edibles.length) && (!foundPosition)) {
    if(edibles[i] === 'apple') foundPosition = true;
    if(!foundPosition) i++;
  }
  //Loop ends when 'apple' is found or when i = edibles.length if not found
  if(i < edibles.length) {
    return i;
  } else {
    return "'apple' was not found"
  }
}

const fruits = ['orange', 'grape', 'apple', 'banana', 'mango'];
console.log("Testing appleIndex() function passing in 'fruits' array to get position of 'apple' below");
console.log(appleIndex(fruits));

/**
 * ### Challenge `isItAnApple`
 * 
 * @instructions
 * This function takes as its only argument an array 
 * containing strings,
 * and returns an array of equal length containing the `true`
 * if the corresponding entry in the original array is 'apple' 
 * and `false` if it is anything else.
 * 
 * 
 * For example, if we invoke `isItAnApple`
 * passing in [ 'orange', 'apple', 'banana', 'apples', 'apple', 'mango' ] as the argument,
 * the returned value should be: [ false, true, false, false, true, false ].
*/
function isItAnApple(blindTest) {
  let blindResults = [];

  for(let i = 0; i < blindTest.length; i++) {
    if(blindTest[i] === 'apple') {
      blindResults.push(true);
    } else {
      blindResults.push(false);
    }
  }

  return blindResults;
}
const fruitList = ['orange', 'apple', 'banana', 'apples', 'apple', 'mango'];
console.log("Testing isItAnApple() function below");
console.log(isItAnApple(fruitList));



/*
// ⭐️ Example Test Data ⭐️

var inventory = [
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
  { id: 4, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  { id: 5, car_make: "Mitsubishi", car_model: "Galant", car_year: 1990 },
  { id: 6, car_make: "Honda", car_model: "Accord", car_year: 1995 },
  { id: 7, car_make: "Smart", car_model: "Fortwo", car_year: 2009 },
  { id: 8, car_make: "Audi", car_model: "4000CS Quattro", car_year: 1987 },
  { id: 9, car_make: "Ford", car_model: "Windstar", car_year: 1996 },
  { id: 10, car_make: "Mercedes-Benz", car_model: "E-Class", car_year: 2000 },
  { id: 11, car_make: "Infiniti", car_model: "G35", car_year: 2004 },
  { id: 12, car_make: "Lotus", car_model: "Esprit", car_year: 2004 },
  { id: 13, car_make: "Chevrolet", car_model: "Cavalier", car_year: 1997 },
  { id: 14, car_make: "Dodge", car_model: "Ram Van 1500", car_year: 1999 }
  /// ... Truncated
]
*/

// Data from file 
//var data = require('data./inventory.js');
var inventory = [
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
  { id: 4, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  { id: 5, car_make: "Mitsubishi", car_model: "Galant", car_year: 1990 },
  { id: 6, car_make: "Honda", car_model: "Accord", car_year: 1995 },
  { id: 7, car_make: "Smart", car_model: "Fortwo", car_year: 2009 },
  { id: 8, car_make: "Audi", car_model: "4000CS Quattro", car_year: 1987 },
  { id: 9, car_make: "Ford", car_model: "Windstar", car_year: 1996 },
  { id: 10, car_make: "Mercedes-Benz", car_model: "E-Class", car_year: 2000 },
  { id: 11, car_make: "Infiniti", car_model: "G35", car_year: 2004 },
  { id: 12, car_make: "Lotus", car_model: "Esprit", car_year: 2004 },
  { id: 13, car_make: "Chevrolet", car_model: "Cavalier", car_year: 1997 },
  { id: 14, car_make: "Dodge", car_model: "Ram Van 1500", car_year: 1999 },
  { id: 15, car_make: "Dodge", car_model: "Intrepid", car_year: 2000 },
  { id: 16, car_make: "Mitsubishi", car_model: "Montero Sport", car_year: 2001 },
  { id: 17, car_make: "Buick", car_model: "Skylark", car_year: 1987 },
  { id: 18, car_make: "Geo", car_model: "Prizm", car_year: 1995 },
  { id: 19, car_make: "Oldsmobile", car_model: "Bravada", car_year: 1994 },
  { id: 20, car_make: "Mazda", car_model: "Familia", car_year: 1985 },
  { id: 21, car_make: "Chevrolet", car_model: "Express 1500", car_year: 2003 },
  { id: 22, car_make: "Jeep", car_model: "Wrangler", car_year: 1997 },
  { id: 23, car_make: "Eagle", car_model: "Talon", car_year: 1992 },
  { id: 24, car_make: "Toyota", car_model: "MR2", car_year: 2003 },
  { id: 25, car_make: "BMW", car_model: "525", car_year: 2005 },
  { id: 26, car_make: "Cadillac", car_model: "Escalade", car_year: 2005 },
  { id: 27, car_make: "Infiniti", car_model: "Q", car_year: 2000 },
  { id: 28, car_make: "Suzuki", car_model: "Aerio", car_year: 2005 },
  { id: 29, car_make: "Mercury", car_model: "Topaz", car_year: 1993 },
  { id: 30, car_make: "BMW", car_model: "6 Series", car_year: 2010 },
  { id: 31, car_make: "Pontiac", car_model: "GTO", car_year: 1964 },
  { id: 32, car_make: "Dodge", car_model: "Ram Van 3500", car_year: 1999 },
  { id: 33, car_make: "Jeep", car_model: "Wrangler", car_year: 2011 },
  { id: 34, car_make: "Ford", car_model: "Escort", car_year: 1991 },
  { id: 35, car_make: "Chrysler", car_model: "300M", car_year: 2000 },
  { id: 36, car_make: "Volvo", car_model: "XC70", car_year: 2003 },
  { id: 37, car_make: "Oldsmobile", car_model: "LSS", car_year: 1997 },
  { id: 38, car_make: "Toyota", car_model: "Camry", car_year: 1992 },
  { id: 39, car_make: "Ford", car_model: "Econoline E250", car_year: 1998 },
  { id: 40, car_make: "Lotus", car_model: "Evora", car_year: 2012 },
  { id: 41, car_make: "Ford", car_model: "Mustang", car_year: 1965 },
  { id: 42, car_make: "GMC", car_model: "Yukon", car_year: 1996 },
  { id: 43, car_make: "Mercedes-Benz", car_model: "R-Class", car_year: 2009 },
  { id: 44, car_make: "Audi", car_model: "Q7", car_year: 2012 },
  { id: 45, car_make: "Audi", car_model: "TT", car_year: 2008 },
  { id: 46, car_make: "Oldsmobile", car_model: "Ciera", car_year: 1995 },
  { id: 47, car_make: "Volkswagen", car_model: "Jetta", car_year: 2007 },
  { id: 48, car_make: "Dodge", car_model: "Magnum", car_year: 2008 },
  { id: 49, car_make: "Chrysler", car_model: "Sebring", car_year: 1996 },
  { id: 50, car_make: "Lincoln", car_model: "Town Car", car_year: 1999 }
];


/**
  * ### Example Array Challenge:
  * 
  * @instructions
  * get3rdCar() should return the string `The is a Land Rover Defender Ice Edition`
  * 
  *
  * NOTE: This example has been completed for you.
  * You say that like it's true. I'm going to fix something.
  * There. I moved the placement of ${the3rd.car_model} so the resulting sentence makes sense.
**/
function get3rdCar(inventory) {
  const the3rd = inventory[2];
  return `The ${the3rd.car_model} is a ${the3rd.car_make}`;
}
console.log("Testing get3rdCar() function (after fixing it) below:");
console.log(get3rdCar(inventory));
console.log("I think the above sentence makes more sense than the one in the comments.");

// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇


/**
 * ### Challenge `getCarInfoByIndex`
 * 
 * @instructions
 * getCarInfoByIndex takes two arguments:
 *     (1) an array which is an inventory of cars like the preview above (see ⭐️ Preview Test Data ⭐️)
 *     (2) a number which is the desired index in the array.
 * getCarInfoByIndex returns a string in the format `This is a {car_make} {car_model}`
 * 
 * For example, if getCarInfoByIndex is invoked with the inventory and the number 0,
 * it will return `This is a Lincoln Navigator`.
*/
function getCarInfoByIndex(carList, index) {
  const retrievedCar = carList[index];

  return `This is a ${retrievedCar.car_make} ${retrievedCar.car_model}`;
}
console.log("Testing getCarInfoByIndex() function for the 21st car below");
console.log(getCarInfoByIndex(inventory, 21));

/**
 * ### Challenge `getLastCarInfo`
 * 
 * @instructions
 * getLastCarInfo takes a single argument:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 * getLastCarInfo returns a string in the format `This is a {car_make} {car_model}
 * 
 * For example, if getLastCarInfo is invoked passing the inventory inside /data/inventory.js,
 * it will return `This is a Lincoln Town Car`.
*/
function getLastCarInfo(carList) {
  const lastCar = carList[carList.length - 1];

  return `This is a ${lastCar.car_make} ${lastCar.car_model}`;
}
console.log("Testing getLastCarInfo() function below");
console.log(getLastCarInfo(inventory));

/**
 * ### Challenge `getModelYears`
 * 
 * @instructions
 * We need the years from every car in the inventory!
 * getModelYears takes a single argument:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 * getModelYears returns an array containing all the 'car_year's in the inventory.
*/
function getModelYears(carList) {
  let carYears = [];

  for(let i = 0; i < carList.length; i++) {
    carYears.push(carList[i].car_year);
  }

  return carYears;
}
console.log("Testing getModelYears() function below");
console.log(getModelYears(inventory));

/**
 * ### Challenge `getCarInfoById`
 *  * * THIS ONE IS A STRETCH GOAL. ATTEMPT IT ONLY AFTER
 * COMPLETING ALL NON-STRETCH CHALLENGES IN THE REPOSITORY!
 * 
 * @instructions
 * getCarInfoById takes two arguments:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 *     (2) a number which is the desired car id (see how each car has its own unique id).
 * getCarInfoById returns a string in the format `This is a {car_make} {car_model}
 * 
 * For example, if getCarInfoById is invoked with the inventory and the number 1,
 * it will return `This is a Lincoln Navigator`.
*/
function getCarInfoById(carList, idNum) {
  let i = 0;
  let foundID = false;

  while((i < carList.length) && (!foundID)) {
    if(carList[i].id === idNum) foundID = true;
    if(!foundID) i++;
  }
  //while-loops ends when id is found or when i = carList.length if not found
  if(foundID) {
    return `This is a ${carList[i].car_make} ${carList[i].car_model}`;
  } else {
    return "Unable to find ID: " + idNum + " in inventory";
  }
}
console.log("Testing getCarInfoById() function for id '34' below");
console.log(getCarInfoById(inventory, 34));
console.log("Testing getCarInfoById() function for id '52' below");
console.log(getCarInfoById(inventory, 52));

/**
 * ### Challenge `getOlderCars`
 * * THIS ONE IS A STRETCH GOAL. ATTEMPT IT ONLY AFTER
 * COMPLETING ALL NON-STRETCH CHALLENGES IN THE REPOSITORY!
 * 
 * @instructions
 * We need a utility to find older cars!
 * getOlderCars takes two arguments:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 *     (2) a number which is the desired max year.
 * getOlderCars returns an array containing all the cars
 * with a `car_year` which is at most the given desired max year,
 * in the same order as they appear in the original inventory.
*/
function getOlderCars(carList, maxYear) {
  let augmentedCarList = [];

  for(let i = 0; i < carList.length; i++) {
    if(carList[i].car_year <= maxYear) {
      //Storing the entire car object in the array below
      augmentedCarList.push(carList[i]);
    }
  }

  return augmentedCarList;
}
console.log("Testing getOlderCars() function for a max year of 1997 below");
console.log(getOlderCars(inventory, 1997));

/**
 * ### Challenge `getGermanCars`
 * * THIS ONE IS A STRETCH GOAL. ATTEMPT IT ONLY AFTER
 * COMPLETING ALL NON-STRETCH CHALLENGES IN THE REPOSITORY!
 * 
 * @instructions
 * We need a utility to find German cars!
 * getGermanCars takes a single argument:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 * getGermanCars returns an array containing all the cars
 * made by either `Audi` or `Mercedes-Benz` or `Volkswagen` or `BMW`,
 * in the same order as they appear in the original inventory.
*/
function getGermanCars(carList) {
  let germanCars = [];

  for(let i = 0; i < carList.length; i++) {
    if((carList[i].car_make === 'Audi') || (carList[i].car_make === 'Mercedes-Benz') || (carList[i].car_make === 'Volkswagen') || (carList[i].car_make === 'BMW')) {
      //Storing the entire car object in the array below
      germanCars.push(carList[i]);
    }
  }

  return germanCars;
}
console.log("Testing getGermanCars() function below");
console.log(getGermanCars(inventory));

/**
 * ### Challenge `carMaker`
 * THIS ONE IS A STRETCH GOAL. ATTEMPT IT ONLY AFTER
 * COMPLETING ALL NON-STRETCH CHALLENGES IN THE REPOSITORY!
 * 
 * @instructions
 * This function takes a single odometer argument (a number) and returns an object.
 * The returned object has the following characteristics:
 *     it has an `odometer` property that contains the argument passed in.
 *     it has a `drive` method that takes a distance as its argument, and
 *         (1) causes the odometer in the object to be increased by the distance,
 *         (2) returns the updated value of the `odometer`.
*/
function carMaker(meter) {
  let drivenCar = {
    odometer: meter,
    drive: function(distance) {
      drivenCar.odometer += distance;
      return `${drivenCar.odometer}`;
    }
  };

  return drivenCar;
}
console.log("Stretch: Testing carMaker(35000) below");
console.log(carMaker(35000));


function carMaker2(meter) {
  let drivenCar = {
    odometer: meter,
    drive: function(distance) {
      drivenCar.odometer += distance;
      return `${drivenCar.odometer}`;
    }
  };

  return `${drivenCar.drive(756)}`;
}
console.log("Stretch: Testing carMaker2(35000) and with a driven amount of 756 miles below");
console.log(carMaker2(35000));
