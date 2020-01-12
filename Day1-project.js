// name input *
// choice veg or non - veg *
// veg options *
// non-veg options *
// randomly choose options
// display *

// Ram - veg - panir; Ram, we have panir for you!


var name = prompt("Enter your name: ");
var choice = prompt(name + ", Are you a veg or non-veg?");

if (choice == 'veg') {
  var vegOptions = ["Panir", "Tarkari", "Saag", "Ghundruk", "Sinki", "Aaalu", "Mula", "Chhad"];
  var randomIndex = Math.floor(Math.random() * vegOptions.length);
  var chosedOption = vegOptions[randomIndex];
  alert(name + ", we have " + chosedOption + " for you!");
} else if (choice == 'non veg') {
  var nonVegOptions = ["Momo", "Buff", "Buff Chilli", "Suasage", "Moton", "Shya Bhale", "Chicken"];
  var randomIndex = Math.floor(Math.random() * nonVegOptions.length);
  var chosedOption = nonVegOptions[randomIndex];
  alert(name + ", we have " + chosedOption + " for you!");
} else {
  alert("Wrong Input!");
}

