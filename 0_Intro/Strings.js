// --------------------------------------
// Exercise 1 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

console.log(Number(numberOne) + Number(numberTwo))

// --------------------------------------


// --------------------------------------
// Exercise 2 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

// ---

// Inspired by source: https://www.w3docs.com/snippets/javascript/how-to-format-a-number-with-two-decimals-in-javascript.html

const formatter = new Intl.NumberFormat( 'en-US', {

    minimumFractionDigits: 2,
    maximumFractionDigits: 2,

})

console.log(formatter.format(Number(numberOne) + Number(numberTwo)))

// --------------------------------------
// Exercise 3 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

//---

const formatterTwo = new Intl.NumberFormat( 'en-US', {

 minimumFractionDigits: 5,
 maximumFractionDigits: 5,

})

console.log(formatterTwo.format((one+two+three)/3))


// --------------------------------------
// Exercise 4 - Get the character by index

const letters = "abc";
// Get me the character "c"


//---

let newString = letters.charAt(2)

console.log(newString)

// --------------------------------------
// Exercise 5 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript


let changedString = fact.replace('j', 'J')

console.log(changedString)

// --------------------------------------


