let letHello = "say Hi with let";
const constHello = "say Hi with const"
var varHello = "say hello with var"

const check = 4;

if (check > 3) {
    let letHello = "redefined letHello value inside block";
    var varHello = "redefined varHello value inside block";

    letHello = "new value for letHello inside block";
    //constHello = "new value ofr constHello inside block"; // error! assignment to constant variable - we cannot change consts after already defined
    varHello = "new value for varHello inside block";

    console.log(letHello) // new value of 
    console.log(constHello)
    console.log(varHello)

}

console.log(hello) // hello is not defined