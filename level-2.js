// 1. Using the loop from question 5 above, only log the counter variable if it is an even number.

for (var count = 15; count <= 25; count++) {
    if (count % 2 === 0)

    console.log (count);
}

// 2. 

function whoAmI() {
    console.log("I am a function");
}

var innerFunction = whoAmI();

function outerFunction(outerFunctionArgument) {
    outerFunctionArgument();
}

outerFunction(innerFunction);