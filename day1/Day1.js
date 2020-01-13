// Variables and Data Types

var text = "Hello world!"; // String 
var num = 7; // Number
var isComplete = false; // Boolean

var test = null; // null
var test1 = undefined; // undefined

var myArray = [null, "ramesh", 3, false, 5, undefined];
console.log(myArray);

var obj = { name: "Ram", age: 18, rollNo: 4 };
console.log(obj);


// Condtions/Decisions/Control statement/

var age = prompt("Please enter your age.");
age = parseInt(age);

if (age <= 10) {
  console.log("You're too young!");
} else if (age < 18)  {
  console.log("You're not eligible");
} else {
  console.log("you're not eligible");
}


// Looping/Iteration
// console.log(1);
// console.log(2);
// console.log(3);

for(var i = 1; i <= 100; i++) {
  console.log(i);
}

// Functions



function myFunction() {
  console.log("Ramesh");
}

myFunction();
myFunction();
myFunction();


