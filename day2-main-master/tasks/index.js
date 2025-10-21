/**
 *  Task1: Declare one of the following, and console.log() each one:
 *
 *  * Integer
 *  * Boolean
 *  * String
 *  * Date
 *  * undefined
 *  * Array of strings
 *  * Object with properties
 */

// TODO:
const myInteger = 42;
console.log(myInteger);

const myBoolean = true;
console.log(myBoolean);

const myString = "Buna!";
console.log(myString);

const myDate = new Date();
console.log(myDate);

const myUndefined = undefined;
console.log(myUndefined);

const myArray = ["abc", "bbc", "cdd"];
console.log(myArray);

const myObject = { name: "Mere", color: "red" };
console.log(myObject);

/**
 * Task2: Prompt the user for his name. Save it to a variable and console.log() it
 *
 * Hint: you have to use document.addEventListener('DOMContentLoaded') to call your function
 */

// TODO:
function askName() {
  const userName = prompt("Please enter your name:");
  console.log(userName);
}

document.addEventListener("DOMContentLoaded", askName);

/**
 * Task3: Make a function that, when called, shows an alert to the user after 5 seconds
 */

// TODO:
function showAlert() {
  setTimeout(() => {
    alert("Alerta");
  }, 5000);
}
showAlert();

/**
 * Task4: Make a function that, given a number X, generates an array of random numbers of length X
 */

// TODO:
function generateRandomArray(n) {
  const randomArray = [];
  for (let i = 0; i < n; i++) {
    randomArray.push(Math.random());
  }

  return randomArray;
}
console.log(generateRandomArray(5));

/**
 * Task5: Write a function that gets the maximum value from a random array generated with the previous function
 */

// TODO:
function maxValue(arr) {
  return Math.max(...arr);
}
maxValue(generateRandomArray(5));
console.log(maxValue(generateRandomArray(5)));

/**
 * Task6: This function gets two strings and removes all occurences of the first one in the other. What is wrong with it ?
 */

function removeString(remove, mainString) {
  return mainString.replace(remove, "");
}

// Test example with
console.log("Test removeString function:");
console.log(removeString("is", "This is a string"));
// The function only removes the first occurrence of 'remove' in 'mainString'.

// Make it recursive
function removeStringRecursive(remove, mainString) {
  if (mainString.includes(remove)) {
    return removeStringRecursive(remove, mainString.replace(remove, ""));
  }

  return mainString;
}

// Test
console.log("Test recursive function:");
console.log(removeStringRecursive("is", "This is a string"));

/**
 * Task7: How does this function work ?
 */

function wtf() {
  [][
    (![] + [])[+[]] +
      ([![]] + [][[]])[+!+[] + [+[]]] +
      (![] + [])[!+[] + !+[]] +
      (!![] + [])[+[]] +
      (!![] + [])[!+[] + !+[] + !+[]] +
      (!![] + [])[+!+[]]
  ][
    ([][
      (![] + [])[+[]] +
        ([![]] + [][[]])[+!+[] + [+[]]] +
        (![] + [])[!+[] + !+[]] +
        (!![] + [])[+[]] +
        (!![] + [])[!+[] + !+[] + !+[]] +
        (!![] + [])[+!+[]]
    ] + [])[!+[] + !+[] + !+[]] +
      (!![] +
        [][
          (![] + [])[+[]] +
            ([![]] + [][[]])[+!+[] + [+[]]] +
            (![] + [])[!+[] + !+[]] +
            (!![] + [])[+[]] +
            (!![] + [])[!+[] + !+[] + !+[]] +
            (!![] + [])[+!+[]]
        ])[+!+[] + [+[]]] +
      ([][[]] + [])[+!+[]] +
      (![] + [])[!+[] + !+[] + !+[]] +
      (!![] + [])[+[]] +
      (!![] + [])[+!+[]] +
      ([][[]] + [])[+[]] +
      ([][
        (![] + [])[+[]] +
          ([![]] + [][[]])[+!+[] + [+[]]] +
          (![] + [])[!+[] + !+[]] +
          (!![] + [])[+[]] +
          (!![] + [])[!+[] + !+[] + !+[]] +
          (!![] + [])[+!+[]]
      ] + [])[!+[] + !+[] + !+[]] +
      (!![] + [])[+[]] +
      (!![] +
        [][
          (![] + [])[+[]] +
            ([![]] + [][[]])[+!+[] + [+[]]] +
            (![] + [])[!+[] + !+[]] +
            (!![] + [])[+[]] +
            (!![] + [])[!+[] + !+[] + !+[]] +
            (!![] + [])[+!+[]]
        ])[+!+[] + [+[]]] +
      (!![] + [])[+!+[]]
  ](
    (![] + [])[+!+[]] +
      (![] + [])[!+[] + !+[]] +
      (!![] + [])[!+[] + !+[] + !+[]] +
      (!![] + [])[+!+[]] +
      (!![] + [])[+[]] +
      (![] +
        [][
          (![] + [])[+[]] +
            ([![]] + [][[]])[+!+[] + [+[]]] +
            (![] + [])[!+[] + !+[]] +
            (!![] + [])[+[]] +
            (!![] + [])[!+[] + !+[] + !+[]] +
            (!![] + [])[+!+[]]
        ])[!+[] + !+[] + [+[]]] +
      [+!+[]] +
      (!![] +
        [][
          (![] + [])[+[]] +
            ([![]] + [][[]])[+!+[] + [+[]]] +
            (![] + [])[!+[] + !+[]] +
            (!![] + [])[+[]] +
            (!![] + [])[!+[] + !+[] + !+[]] +
            (!![] + [])[+!+[]]
        ])[!+[] + !+[] + [+[]]]
  )();
}

// wtf();
