// 1
console.log('\nONE')
function makeCounter() {
let currentCount = 0;
return function() {
currentCount++;
console.log(currentCount)
return currentCount;
};
}
let counter1 = makeCounter();
counter1(); // 1
counter1(); // 2

//2
console.log('\nTWO')
function delayMsg(msg)
{
console.log(`This message will be printed after a delay: ${msg}`)
}
setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all')

// 3
console.log('\nTHREE')
function printMe(msg) {
console.log('printing debounced message: ' + msg) // print message
}

printMe = debounce(printMe, 1000); // set print message to happen after debounce

function debounce(origFunction, ms) { // delays original function
    let timer;  // set timer
    return function(msg){  // initiate code
        clearTimeout(timer)  // clear timer if there is a previous timer still in progress
        timer = setTimeout (origFunction, ms, msg); // initiate original code after 1000ms if no more input.
    }
}
//create this debounce function for a)
//fire off 3 calls to printMe within 300ms - only the LAST one should print, after 1000ms of no calls
setTimeout( printMe, 100, 'first');
setTimeout( printMe, 200, 'second');
setTimeout( printMe, 300, 'third');

//4 
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144.
console.log('\nFOUR')
function printFibonacci(){

    let first = 1;
    let second = 1;

    console.log(first);
    console.log(second);

    setInterval(function() {
        let next = first + second;
        console.log(next);
        first = second;
        second = next;
        
        counter = 1;

        counter++;
    
        if (counter === 10) {
            clearInterval(interval);
        }

    } , 1000);
}

printFibonacci()

//5
let car = {
    make: "Porsche",
    model: '911',
    year: 1964,
    description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
    }
    };
    car.description(); //works
    setTimeout(car.description, 200); //fails

//6
console.log('\nSIX')

Function.prototype.delay = function(ms) {
    let origFunction = this;
    console.log(this)



    return function( a, b ) {
        setTimeout(() => origFunction.apply(this , arguments), ms)
    }
}

function multiply(a, b, c, d) {
    console.log( 'question 6: ' + (a * b * c * d));
    }
    multiply.delay(1500)(25, 25, 5, 5); // prints 25 after 500 milliseconds


//8

class DigitalClock {
    constructor(prefix) {
        this.prefix = prefix;
    }
    display() {
        let date = new Date();
        //create 3 variables in one go using array destructuring
        let [hours, mins, secs] = [date.getHours(), date.getMinutes(),
        date.getSeconds()];
        if (hours < 10) hours = '0' + hours;
        if (mins < 10) mins = '0' + mins;
        if (secs < 10) secs = '0' + secs;
        console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
    }
    stop() {
        clearInterval(this.timer);
    }
    start() {
        this.display();
        this.timer = setInterval(() => this.display(), 1000);
    }
}
const myClock = new DigitalClock('my clock:')
myClock.start()

    class PrecisionClock extends DigitalClock {

        constructor(prefix, precision = 1000) {
            super(prefix)
            this.precision = precision;
        }
        start() {
            this.display();
            this.timer = setInterval(() => this.display(), 1000);
    }
}

const precisionClock = new PrecisionClock("precision clock", 5000);
precisionClock.start();

class AlarmClock extends DigitalClock {
    constructor(prefix, wakeupTime = '07:00') {
        super(prefix);
        this.wakeupTime = wakeupTime;
    }

    checkAlarm() {
        let date = new Date();
        let [hours, mins] = [date.getHours(), date.getMinutes()];
        let currentTime = `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;

        if (currentTime === this.wakeupTime) {
            console.log('Wake Up');
            this.stop();
        }
    }

    start() {
        super.start(); // Call the start method of the parent class (DigitalClock)
        this.timer = setInterval(() => this.checkAlarm(), 1000);
    }
}

//9





//10