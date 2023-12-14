//new colors array
let colors = ['crimson', 'tangerine', 'canary', 'emerald', 'azure', 'lavender', 'bubblegum'];
console.log(colors[0]); 
console.log(colors[1]); 
console.log(colors[2]);
console.log(colors[3]); 
console.log(colors[4]); 
console.log(colors[5]); 
console.log(colors[6]); 

//what is the first color?
let whatColor = colors[0]
console.log(whatColor)

// list the colors in the array, push 2 new colors into end of array, re-list array
console.log(colors);
colors.push('onyx', 'ivory');
console.log(colors);

// add new fruit rainbow in front of array, re-list array
colors.unshift('apple', 'tangarine', 'lemon', 'kiwi', 'juniper', 'grape', 'dragonfruit',);
console.log(colors);

// pop() removes the LAST element of an array, log the LAST color before removal
let lastColor = colors.pop();
console.log(lastColor);
console.log(colors);

// shift() removes the FIRST element of an array, log the FIRST color before removal
let firstColor = colors.shift();
console.log(firstColor);
console.log(colors);

// Where is emerald??
let emeraldIndex = colors.indexOf('emerald');
console.log('Emerald is at: ' + emeraldIndex);

// How many colors do we have??
let numColors = colors.length;
console.log('The total number of colors is: ' + numColors);

// replace element 1 and 4
colors[1] = 'SADNESS'
colors[4] = 'RAIN'

// print all
console.log(colors);