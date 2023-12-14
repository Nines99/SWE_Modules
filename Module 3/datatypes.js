console.log('\n Strings')
const one = 1
const pi = 3.1415

const doubleQuotes = " this helps words like can't"
console.log(doubleQuotes)

const singleQuotes = 'this allows for "QUOTES"'
console.log(singleQuotes)

const backTicks = ` ${one - 5} or ${pi} `;
console.log(backTicks)


console.log('\n Boolean')

let myBoolean = false; // set to false

myBoolean = !myBoolean; // set to true

if (myBoolean) { console.log('My boolean was true'); }
else { console.log('My boolean was false'); }

const getBMI = function CalcBMI(height, weight) {
    let BMI = weight / (height * height);
    return BMI;
}

console.log(getBMI(1.85, 100));
