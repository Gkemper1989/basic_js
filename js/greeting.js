var today = new Date(); //create a new date object
var hourNow = today.getHours(); // find the current hour
var greeting;

// Display the appropriate greeting based on the current time
// everything inside the curly brackets is known as a code block
if (hourNow > 18) {
    greeting = 'Good evening!'; // each line of code is a statement and should end with a semicolon
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good morning!';
} else {
    greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>');


