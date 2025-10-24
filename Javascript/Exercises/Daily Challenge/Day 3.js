// Exercise 3: Check if a Number is Even or Odd
// Description: Given a number entered by the user, check if it's even or odd. 
// The program will display a message indicating whether the number is even or not.

var userNumber = prompt("Put a number here to see if it's even");

// We check if the user input is actually a number
if (isNaN(userNumber)) {
    alert("Please enter a valid number."); // If it's not a number, show an error message
} else {
    // We convert the input to a number and verify if it's even
    userNumber = Number(userNumber);
    var message = (userNumber % 2 === 0) ? "It's even" : "It's not even"; // Ternary operator to check for evenness
    alert(message); // Show the result in an alert box
}
