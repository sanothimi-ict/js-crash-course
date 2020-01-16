// Day 3: More Arrays, Objects & High order functions

// Objects
const person = {
  name: "Ram",
  age: 18,
  rollNo: 5,
  isStudent: true
};

console.log(person.age);
console.log(person['age']);

for (let key in person) {
  console.log(person[key]);
}

console.log(Object.keys(person));

// Arrays

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday'];

console.log(weekDays[0]);
console.log(weekDays.length);

for (let i = 0; i < weekDays.length; i++) {
  console.log(weekDays[i]);
}

// updating array value

weekDays[0] = 'Sun';

console.log(weekDays[0]);

// Arrays Advanced

const todos = [];

console.log(todos);

todos.push('Write a peom');

console.log(todos);

todos.push('write a movie');

console.log(todos);

console.log(weekDays.slice(0, 3));

// Write a program to reverse the array items.

function reverse (arr) {
  const reversed = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  
  return reversed;
};

console.log(reverse(weekDays));

// Array High order functions

// forEach

weekDays.forEach(function (val, index) {
  console.log(val);
});






