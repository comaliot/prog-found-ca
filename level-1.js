// 1. Declare and initialise a variable with a string value.

var consoleMessage = "Hello World!";

// 2. Create an object variable called person and give it two properties (a key and a value) of your choice.

var person = "Rokas";

/*
3.  Create a variable called outOfStock and assign it a boolean value.
    Create an if else statement that checks the value of outOfStock.
    If it is true, console log "Out of stock". Otherwise log "In stock".
*/

var outOfStock = true;

if(outOfStock > 0) {
    console.log("In stock");
} else {
    console.log("Out of stock");
}

// 4. Create an array of five numbers. Loop through the array and console log each value.

var arrayOfNumbers = [1, 3, 5, 7, 9];

for (var i = 0; i < arrayOfNumbers.length; i++) {
    console.log(arrayOfNumbers[i]);
}

// 5. Create a for loop that counts from 15 to 25. Console log the value of the counter variable inside the loop.
    
for (var count = 15; count <= 25; count++) {
    console.log(count);
}

// 6. Using the same loop from the above question, only log the value of the counter variable if it is equal to 20.

for (var count = 15; count <= 25; count++) {
    if (count === 20) {
        console.log("20");
    }
}

/*
7. Create an array of two objects. Each object must have the same three properties (with different values):

one property with a string value
one property with a number value
one property with a boolean value
Loop through the array and console log the number value and the boolean value.
*/

var objects = [
    // first object
    { 
        name: "Sun",
        distanceToEarth: 149600000,
        isBurning: true
    },
    // second object
    {
        name: "Moon",
        distanceToEarth: 384400,
        isBurning: false
    }
];

for (var i = 0; i < objects.length; i++) {
    console.log(objects[i].distanceToEarth);
    console.log(objects[i].isBurning);
}

/*
8. Create a function called whatIDontLike that accepts one argument. Choose a good name for the argument.
Inside the function, log the string "I don't like " together with the argument.
Call the function and pass in a value of your choice.
*/

function whatIDontLike(dislikeableThing) {
    console.log("I don't like " + dislikeableThing)
}

whatIDontLike("onions");

// 9. Create a function that accepts two arguments. Inside the function, subtract the second argument from the first and console log the result.

function twoNumbers(number1, number2) {
    var total = number1 - number2;
    console.log(total);
}

twoNumbers(20, 15);

/*
10. Create an empty array. Create a function that accepts one argument.
Inside the function, add the argument to the array. Call the function and pass in a value of any type.
*/

var nameArray = [];

function addName(name) {
    nameArray.push(name);
}

addName("Rokas");
