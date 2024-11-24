/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
// Use word function, Add in curly braces, use keyword return
function addTwoFunctions(a,b) {
    return a + b;
}

let sum = addTwoFunctions (3, 5);
console.log(sum);

// Arrow Function With Parameters
//Use word const instead of function, use fat arrow, use curly braces, use keyword return

const addTwoFunctions2 = (a,b) => {
    return a + b;
}

let sum2 = addTwoFunctions2 (5, 5);
console.log(sum2);

// Single Line Arrow Function With Parameters
//Use word const, remove curly braces, add function on same line (only simple codes)
// After => fat arrow comes the return

const addTwoFunctions3 = (a,b) => (a + b);

let sum3 = addTwoFunctions3(6,7);
console.log(sum3);

// Implicit Returns
//Simple one parameter you can leave out the first parantheses.

const saySomething = message => console.log(message);
saySomething ("Hello World!");

const sayHello = () => console.log("Hello");
sayHello();

// Returning Multiple Lines

const returnMultipleLines = () => (
   `<p>
   This is a multiline text!
   </p>`
)

console.log(returnMultipleLines());
