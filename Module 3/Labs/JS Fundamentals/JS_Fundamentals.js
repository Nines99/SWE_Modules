// 1
console.log('\nONE')
console.log("" + 1 + 0) // Converted into string = 10
console.log("" - 1 + 0) // Same as above = -1
console.log(true + false) // Converted into numeric context, 1 + 0 = 1
console.log(!true) // NOT TRUE = FALSE
6 / "3" // 3 is a string, converted into number 6 / 3 = 2
"2" * "3" // same as above 2 x 3 = 6
4 + 5 + "px" // literally 4 + 5 = 9 , 9 + px = 9px
"$" + 4 + 5 // $ + 4 = $4 , $4 + 5 = $45
"4" - 2 // 4 - 2 = 2
"4px" - 2 // "4px" cannot be converted into number, NaN (Not a Number)
console.log(" -9 " + 5 )// Both are added together as strings, thus "-9 5"
" -9 " - 5 // converted into numbers, -9 - 5 = -14
null + 1 // null is treated as 0, thus 0 + 1 = 1
undefined + 1 // not a number + a number = NaN
undefined == null // == is loose equality = true considered equal
undefined === null // === is strict equality = false as they are not the exact same
" \t \n" - 2 // the string is convereted into 0 as whitespace characters are ignored. 0 -2 = -2

//2
console.log('\nTWO')
let three = "3"
let four = "4"
let thirty = "30"
//what is the value of the following expressions?
let addition = three + four // both are strings, they are added literally thus 34
let multiplication = three * four // using * converts them into numbers, 3 x 4 = 12
let division = three / four // also converts into numbers with /, 3 / 4 = 0.75
let subtraction = three - four // converts into numbers making 3 - 4 = -1
let lessThan1 = three < four // boolean = true , the strings are converted and compared as numbers
let lessThan2 = thirty < four // boolean = false, 30 < 4 = false

//3
console.log('\nTHREE')
if (0) console.log('#1 zero is true') // 0 is treated as false, thus if does not execute
if ("0") console.log('#2 zero is true') // non-empty string = true, thus if does execute
if (null) console.log('null is true') // same as 0, treated as false, does not execute
if (-1) console.log('negative is true') // same as "0" non-zero number is true, does execute
if (1) console.log('positive is true') // same as above, but positive.

//4
console.log('\nFOUR')
let a = 2, b = 3;
let abresult = `${a} + ${b} is `;
if (a + b < 10) {
abresult += 'less than 10';
} else {
abresult += 'greater than 10';
}
console.log(abresult)

// condition ? expressionIfTrue : expressionIfFalse

// let isRaining = true;
// let action = isRaining ? 'Take an umbrella' : 'Enjoy the sunshine';
// console.log(action); // Output: "Take an umbrella"

let z = 2, x = 3; 
let zxresult = `${z} + ${x} is ${z + x} is ${z + x < 10 ? 'less than 10' : 'greater than 10'}`;
console.log(zxresult)

// += is an assignment operator after adding 
// let x = 5;
// x += 2; // Equivalent to: x = x + 2;
// x is now 7

//5
console.log('\nFIVE')
function FESgetGreeting(name) {
    return 'Hello ' + name + '!';
    }
    console.log(FESgetGreeting('Henry'));

const AFSgetGreeting = (name) => 'Hello ' + name + '!';
    console.log(AFSgetGreeting('Henry'));

//6
console.log('\nSIX')

const westley = {
    name: 'Westley',
    numFingers: 5
    }
    const rugen = {
    name: 'Count Rugen',
    numFingers: 6
    }
    const inigo = {
    firstName: 'Inigo',
    lastName: 'Montoya', // last name included
    greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
    console.log(greeting + this.getCatchPhrase(person));
    },
    getCatchPhrase(person) {
        if (person.numFingers === 6) { // if person has 6 fingers = CATCHPHRASE! if not...
            return ' You killed my father. Prepare to die. ';
         } else {
            return 'Have a lovely day.'
        }
    }
    }
    inigo.greeting(westley)
    inigo.greeting(rugen)

//7
console.log('\nSEVEN')

const basketballGame = {
    score: 0,
    foulCount: 0, // Add foul count
    freeThrow() {
        this.score++;
        return this; //Chaining
    },
    basket() {
        this.score += 2;
        return this;
    },
    threePointer() {
        this.score += 3;
        return this;
    },
    foul() {
        this.foulCount++;
        return this;
    },
    halfTime() {
        console.log(`Halftime score is ${this.score}, fouls: ${this.foulCount}`); // foulcount
        return this;
    },
    fullTime() {
        console.log(`Full-time final score is ${this.score}, fouls: ${this.foulCount}`); // Same as halftime + foul
        return this; 
    }
}

    //modify each of the above object methods to enable function chaining as below:
    basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime().foul().basket().threePointer().fullTime();

//8
console.log('\nEIGHT')

function printCityInfo(city) { // initiates a loop for every 'key' inside every 'city'
    for (let key in city) { 
        console.log(`${key}: ${city[key]}`);
    }
}
// if key is "name" and city[key] is "Sydney", the generated string will be "name: Sydney". 
// This is then passed to console.log() to be printed to the console.

const sydney = {
name: 'Sydney',
population: 5_121_000,
state: 'NSW',
founded: '26 January 1788',
timezone: 'Australia/Sydney'
}

const auckland = {
    name: 'Auckland',
    population: 1_478_800,
    fact: 'Fifth largest city in Oceania.',
    founded: 'c 1350 by Maori | 1840 by Europeans',
   // timezone: 'Auckland/New Zealand'
    nickname: 'City of Sails'
    }

printCityInfo(sydney);
printCityInfo(auckland);


//9
console.log('\nNINE')

let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let moreTSports = teamSports.slice(); // new copy to add new sports to

moreTSports.push('Basketball', 'Soccer'); // add at end
moreTSports.unshift('Rugby') // add infront

let dog1 = 'Beta';
let dog2, dog3 = 'dog1';

dog2 = 'Charlie';
dog3 = 'Alpha';

let cat1 = { name: 'Fluffy', breed: 'Siberian' };
let cat2 = cat1;

cat2.name = 'Spongey'

console.log(teamSports);
console.log(moreTSports);

console.log(dog1); 
console.log(dog2); 
console.log(dog3); 

console.log(cat1);
console.log(cat2);

//10
console.log('\nTEN')



class PersonClass {
    constructor (name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    }

    canDrive() {
        return this.age >= 16;
    }
}

PersonClass.prototype.canDrive = function() {
    return this.age >= 16;
};
let person1 = new PersonClass("Henry Zyu" , 24);
let person2 = new PersonClass("Stephanie Joi", 22);

let person3 = new PersonClass("Totally Human Snowy Bunny", 9);

console.log(person1, "Can Drive? " + person1.canDrive());
console.log(person2, "Can Drive? " + person2.canDrive());
console.log(person3, "Can Drive? " + person3.canDrive());
