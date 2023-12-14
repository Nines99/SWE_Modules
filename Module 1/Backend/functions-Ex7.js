const init = require('logging-pretty');
const log = init();

/*log.info("this is information message log");
log.warn("warn message lorem ipsum");
log.error("oops!! found error in function getData");
log.debug("debugging function data start from 1 ~ 5");
log.trace("tracing function data");
log.fatal("unhandleError!! found error in function getData");*/

// greets the user
function sayHello() {
    console.log('Hello User!')
}

// states function of the program
function stateFuction() {
    console.log('I am doing Maths, Beep Boop.')
}

// executes the functions + log
sayHello()
stateFuction()
log.info("sayHello + stateFunction complete")

//this function returns the sum of two numbers
function sum(a, b){
}

// establish const parameters
const A = 1;
const B = 2;

//addition function + test
function addition(a, b){
    return (a + b)
}
console.log (addition(A, B))

if(addition(A, B) != 3) throw Error (log.error('Addition Failed'))
log.debug("Addition Passed (3)")


//subtraction function + test
function subtraction(a, b){
    return (a - b)
}

console.log (subtraction(A, B))

if(subtraction(A, B) != -1) throw Error (log.error('Subtraction Failed'))
log.debug("Subtraction Passed (-1)")


//multiplication function + test
function multiplication(a, b){
    return (a * b)
}
console.log (multiplication(A, B))

if(multiplication(A, B) != 2) throw Error (log.error('Multiplication Failed'))
log.debug("Multiplication Passed (2)")


//division function + intended error
function division(a, b){
    return (a / b)
}

console.log (division(A, B))

if(division(A, B) != 0) throw Error (log.error('Division Failed not ("0")'))
log.debug("Division Passed")




