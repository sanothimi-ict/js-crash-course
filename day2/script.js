// Day 2: Functions, Scope & DOM
// - Functions
// - Scope
// - API
// - DOM Events & DOM Manipulation


function myFunction () {
  console.log('From my function');
  console.log("another text");
}

myFunction();
myFunction();
myFunction();

function squareOf2 () {
  return 2 * 2;
}

var value = squareOf2();
console.log(value);

function square (n) {
  return n * n;
}

var squared = square(4);
console.log(squared);


// SCOPE

var name = "Ramesh";

function test () {
  var age = 18;
  console.log(age);
}

test();

console.log(age);

if (true) {
  let rollNo = 18;
  console.log(rollNo);
}

console.log(rollNo);

let userName = "Ram";
console.log(userName);
userName = "Sita";
console.log(userName);

const userName = "Ram";
console.log(userName);
userName = "Sita";
console.log(userName);

// API

// DOM

// select body
const body = document.querySelector("body");

// create h1
const h1 = document.createElement("h1");

// set text
h1.textContent = "Hello world";

// append
body.appendChild(h1);


const h5 = document.querySelector("h5");

h5.style.color = "blue";

h5.remove();

// EVENTS
// click
// change


const div = document.querySelector("div");

div.addEventListener('click', removeDiv);

function removeDiv() {
  div.remove();
}

const input = document.querySelector("input");

input.addEventListener('keyup', handleChange);

function handleChange () {
  console.log(input.value);
}

