// This is an exercise in basic functions and also with storing prompted values. //
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

var city = prompt("Enter your favorite city in all lowercase and treat it not like a proper noun that it should be:");
var capital = capitalize(city);

alert("Here is what you meant to say:  " + capitalize(city));
