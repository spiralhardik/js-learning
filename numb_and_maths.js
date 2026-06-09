const test = 1000000

// console.log(test.toLocaleString('en-IN'));




//////////////////// Maths ///////////////


console.log(Math.abs(-10)); // Nagative Value Make Posotive

// For Rounder Number  

// use ceil() for up number ex.Math.ceil(4.2) result = 5
// use fllor() for down number ex.Math.ceil(4.2) result = 4

// console.log(Math.round(5.9))

// console.log(Math.ceil(5.9))
// console.log(Math.floor(5.9))


// Math.random()

console.log(Math.random()*10 + 1);


// =============

const price = 99.567;
console.log(price.toFixed(3));

console.log(price);
console.log(Math.round(4.6));
console.log(Math.min(10, 20, 30));


const birthYear = 2000;
const currentYear = 2026;

const age = currentYear - birthYear;

// console.log(`Your age is ${age}`);

// console.log(10 == "10");
// console.log(10 === "10");


let number = "15"

// console.log(typeof number);

// console.log(Number(number));

let x = '0'
// console.log(typeof x);

// console.log(Boolean(x))

// console.log(typeof true);


let tech = "Javascript"




// console.log(tech.length);

let textMsg = "hello"

console.log("tech",tech.includes('script'));

// console.log(textMsg.toUpperCase());


//////////////
//Create two numbers and perform all arithmetic operations.

let a = 5
let b = 6

console.log(`Addition ${a+b}`);
console.log(`Substraction ${a-b}`);
console.log(a / b);
console.log(a - b);
console.log(a + b);





console.log(10 == "10"); //check value
console.log(10 === "10"); // check value with type


//Generate a random number between 1 and 100.

let randmNuber = Math.floor( Math.random() * 100) + 1

console.log(randmNuber);
