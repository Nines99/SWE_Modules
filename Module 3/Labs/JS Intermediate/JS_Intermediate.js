// 1
console.log('\nONE')
function ucFirstLetters(inputString) {
    let words = inputString.split(' ');

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    return words.join(' ');
}

console.log(ucFirstLetters("los angeles america")); 
console.log(ucFirstLetters("auckland new zealand")); 
console.log(ucFirstLetters("sydney australia")); 

// 2
console.log('\nTWO')
function truncate(str, max) {
    if (str.length > max) {
        return str.slice(0, max - 3) + '...';
    } else {
        return str;
    }
}

console.log(truncate('This text will be truncated if it is too long', 25))
// This text will be trun...

// 3
const animals = ['Tiger', 'Giraffe']
console.log(animals)

//a
animals.push('Stingray', 'Beluga');
console.log(animals)
//b
animals.unshift('Sawshark', 'Pug');
console.log(animals)
//c
animals.sort();
console.log(animals)
//d
function replaceMiddleAnimal(newValue) {
    if (animals.length % 2 === 1) {
        const middleIndex = Math.floor(animals.length / 2);
        animals[middleIndex] = newValue;
    }
}

replaceMiddleAnimal('Octopus');
console.log(animals)
// doesnt work?

function findMatchingAnimals(beginsWith) {
    beginsWith = beginsWith.toLowerCase(); 
    return animals.filter(animal => animal.toLowerCase().startsWith(beginsWith));
}

const matchingAnimals = findMatchingAnimals('p');
console.log(matchingAnimals);


console.log('\nTHREE')
// function camelCase(cssProp) {
//     let words = cssProp.split('-');
//     let camelCased = '';

//     for(let i = 0; i < words.length; i++) {
//         if (i == 0) {
//             camelCased += words[i]
//         }
//         else {
//             camelCased += words[i].charAt(0).toUpperCase() + words[i].substring(1)
//         }
//     }
//     return camelCased;
// }

// function camelCaseB(cssProp) {
//     let words = cssProp.split('-');
//     let camelCased = '';

//     for(let word of words) {
//         if (camelCased.lenth == 0) {
//             camelCased += word
//         }
//         else {
//             camelCased += words[i].charAt(0).toUpperCase() + words[i].substring(1)
//         }
//     }
//     return camelCased;
// }

// function camelCaseB2(cssProp) {
//     let words = cssProp.split('-');
//     let camelCased = '';

//     words.forEach(word => {
//         if (camelCased.lenth == 0) {
//             camelCased += word
//         }
//         else {
//             camelCased += words[i].charAt(0).toUpperCase() + words[i].substring(1)
//         }
//     })

//     return camelCased;
// }

// function camelCaseC(cssProp) {
//     let words = cssProp.split('-');
//     let camelCased = '';

//     for(let word of words) {
//         camelCased += (camelCased.length == 0) ? camelCased += word
//             : word.charAt(0).toUpperCase() + words[i].substring(1)
//         }
    
//     return camelCased;
// }


// console.log(camelCase('margin-left'))
// console.log(camelCase('background-image'))
// console.log(camelCase('display'))
// console.log(camelCase('border-top-color'))

// console.log(camelCaseB('margin-left'))
// console.log(camelCaseB('background-image'))
// console.log(camelCaseB('display'))
// console.log(camelCaseB('border-top-color'))

// console.log(camelCaseB2('margin-left'))
// console.log(camelCaseB2('background-image'))
// console.log(camelCaseB2('display'))
// console.log(camelCaseB2('border-top-color'))

// console.log(camelCaseC('margin-left'))
// console.log(camelCaseC('background-image'))
// console.log(camelCaseC('display'))
// console.log(camelCaseC('border-top-color'))

//9

console.log('\nNINE')
let salaries = {
    "Timothy" : 35000,
    "David" : 25000,
    "Mary" : 55000,
    "Christina" : 75000,
    "James" : 43000
    };
//a
    function sumSalaries(salaries) { 
        let totalSalary = 0;
      
        for (let employee in salaries) { // start loop for every employee to add their salary to total salary
          totalSalary += salaries[employee];
        }
      
        return totalSalary;
      }
      
      let total = sumSalaries(salaries);
      console.log('total salary: ' + total);

//b
    function topEarner(salaries) {
        let highestSalary = 0;
        let topEarnerName = '';

        for (let employee in salaries) {
            if (salaries[employee] > highestSalary) {
                highestSalary = salaries[employee];
                topEarnerName = employee;
            }
        }

        return topEarnerName;
    }

    let topEarnerName = topEarner(salaries);
    console.log(`The top earner is: ${topEarnerName}`);
//10

const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getHours() + ' hours have passed so far today')
//console.log(today.getMinutes() + ' minutes have passed so far today') 

const minutesPassed = today.getHours() * 60 + today
